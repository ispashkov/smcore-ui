import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../../api/types/exercises-types-api.types'
import { TrainersApi } from '../../../../api/types/trainers-api.types'
import {
  SchedulePageModalCreateCreateExercisePayload,
  SchedulePageModalCreateFetchDictionariesSuccessPayload,
} from './schedule-page-modal-create.types'

export interface SchedulePageCreateModalState {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercisesTypes: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  trainers: Nullable<Pagination<TrainersApi.Trainer>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: SchedulePageCreateModalState = {
  directions: null,
  exercisesTypes: null,
  trainers: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: schedulePageModalCreateActions, reducer: schedulePageModalCreateReducer } = createSlice({
  name: '@@schedule-page-create-modal',
  initialState,
  reducers: {
    fetchDictionaries: (state: Draft<SchedulePageCreateModalState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchDictionariesSuccess: (
      state: Draft<SchedulePageCreateModalState>,
      action: PayloadAction<SchedulePageModalCreateFetchDictionariesSuccessPayload>
    ) => {
      const { directions, exercisesTypes, trainers } = action.payload

      state.directions = directions
      state.exercisesTypes = exercisesTypes
      state.trainers = trainers

      state.isLoading = false
      state.isLoaded = true
    },
    fetchDictionariesError: (state: Draft<SchedulePageCreateModalState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    createExercise: (
      state: Draft<SchedulePageCreateModalState>,
      _: PayloadAction<SchedulePageModalCreateCreateExercisePayload>
    ) => {
      state.isLoading = true
    },
    createExerciseSuccess: (state: Draft<SchedulePageCreateModalState>) => {
      state.isLoading = false
    },
    createExerciseError: (state: Draft<SchedulePageCreateModalState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
