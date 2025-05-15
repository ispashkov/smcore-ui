import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Pagination } from '../../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../../api/types/exercises-types-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { TrainersApi } from '../../../../api/types/trainers-api.types'
import { Nullable } from '../../../../types/lang.types'
import { ScheduleManagementPageModalFetchDictionariesSuccessPayload } from './schedule-management-page-modal.types'

export interface ScheduleManagementPageModalState {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercisesTypes: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  studiosRooms: Nullable<Pagination<StudiosRoomsApi.StudioRoom>>
  trainers: Nullable<Pagination<TrainersApi.Trainer>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ScheduleManagementPageModalState = {
  directions: null,
  exercisesTypes: null,
  studiosRooms: null,
  trainers: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: scheduleManagementPageModalActions, reducer: scheduleManagementPageModalReducer } = createSlice(
  {
    name: '@@schedule-management-page-modal',
    initialState,
    reducers: {
      fetchDictionaries: (state: Draft<ScheduleManagementPageModalState>, _: PayloadAction<string>) => {
        state.isLoading = true
      },
      fetchDictionariesSuccess: (
        state: Draft<ScheduleManagementPageModalState>,
        action: PayloadAction<ScheduleManagementPageModalFetchDictionariesSuccessPayload>
      ) => {
        const { directions, exercisesTypes, studiosRooms, trainers } = action.payload

        state.directions = directions
        state.exercisesTypes = exercisesTypes
        state.studiosRooms = studiosRooms
        state.trainers = trainers
        state.isLoading = false
        state.isLoaded = true
      },
      fetchDictionariesError: (state: Draft<ScheduleManagementPageModalState>, action: PayloadAction<Error>) => {
        state.error = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      reset: () => initialState,
    },
  }
)
