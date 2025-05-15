import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../../api/types/exercises-types-api.types'
import { TrainersApi } from '../../../../api/types/trainers-api.types'
import {
  ScheduleGroupPageModalEditFetchDictionariesSuccessPayload,
  ScheduleGroupPageModalEditEditExercisePayload,
} from './schedule-group-page-modal-edit.types'

export interface ScheduleGroupPageModalEditState {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercisesTypes: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  trainers: Nullable<Pagination<TrainersApi.Trainer>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ScheduleGroupPageModalEditState = {
  directions: null,
  exercisesTypes: null,
  trainers: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: scheduleGroupPageModalEditActions, reducer: scheduleGroupPageModalEditReducer } = createSlice({
  name: '@@schedule-group-page-modal-edit',
  initialState,
  reducers: {
    fetchDictionaries: (state: Draft<ScheduleGroupPageModalEditState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchDictionariesSuccess: (
      state: Draft<ScheduleGroupPageModalEditState>,
      action: PayloadAction<ScheduleGroupPageModalEditFetchDictionariesSuccessPayload>
    ) => {
      const { directions, exercisesTypes, trainers } = action.payload

      state.directions = directions
      state.exercisesTypes = exercisesTypes
      state.trainers = trainers

      state.isLoading = false
      state.isLoaded = true
    },
    fetchDictionariesError: (state: Draft<ScheduleGroupPageModalEditState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    editExercise: (
      state: Draft<ScheduleGroupPageModalEditState>,
      _: PayloadAction<ScheduleGroupPageModalEditEditExercisePayload>
    ) => {
      state.isLoading = true
    },
    editExerciseSuccess: (state: Draft<ScheduleGroupPageModalEditState>) => {
      state.isLoading = false
    },
    editExerciseError: (state: Draft<ScheduleGroupPageModalEditState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
