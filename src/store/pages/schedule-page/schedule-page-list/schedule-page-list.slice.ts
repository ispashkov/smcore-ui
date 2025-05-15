import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { Nullable } from '../../../../types/lang.types'
import { SchedulePageParams } from '../../../../pages/schedule-page/schedule-page.types'
import { SchedulePageListFetchPageDataSuccessPayload } from './schedule-page-list.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'

export interface SchedulePageListState {
  exercises: Nullable<ExercisesApi.Exercise[]>
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
  isLoading: boolean
  isLoaded: boolean
  isCanceling: boolean
  error: Nullable<Error>
}

const initialState: SchedulePageListState = {
  exercises: null,
  studiosRooms: null,
  isLoading: false,
  isLoaded: false,
  isCanceling: false,
  error: null,
}

export const { actions: schedulePageListActions, reducer: schedulePageListReducer } = createSlice({
  name: '@@schedule-page-list',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<SchedulePageListState>, _: PayloadAction<SchedulePageParams>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<SchedulePageListState>,
      action: PayloadAction<SchedulePageListFetchPageDataSuccessPayload>
    ) => {
      const { exercises, studiosRooms } = action.payload

      state.exercises = exercises
      state.studiosRooms = studiosRooms
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<SchedulePageListState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    cancelExercise: (state: Draft<SchedulePageListState>, _: PayloadAction<string>) => {
      state.isCanceling = true
    },
    cancelExerciseSuccess: (state: Draft<SchedulePageListState>) => {
      state.isCanceling = false
    },
    cancelExerciseError: (state: Draft<SchedulePageListState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isCanceling = false
    },
    reset: () => initialState,
  },
})
