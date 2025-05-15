import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { ExercisesTimetableApi } from '../../../../api/types/exercises-timetable-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { Nullable } from '../../../../types/lang.types'
import { ScheduleManagementPageParams } from '../../../../pages/schedule-management-page/schedule-management-page.types'
import { ScheduleManagementPageListFetchPageDataSuccessPayload } from './schedule-management-page-list.types'

export interface ScheduleManagementPageListState {
  exercisesTimetable: Nullable<ExercisesTimetableApi.ExercisesTimetable[]>
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
  isLoading: boolean
  isLoaded: boolean
  isCanceling: boolean
  error: Nullable<Error>
}

const initialState: ScheduleManagementPageListState = {
  exercisesTimetable: null,
  studiosRooms: null,
  isLoading: false,
  isLoaded: false,
  isCanceling: false,
  error: null,
}

export const { actions: scheduleManagementPageListActions, reducer: scheduleManagementPageListReducer } = createSlice({
  name: '@@schedule-management-page-list',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<ScheduleManagementPageListState>, _: PayloadAction<ScheduleManagementPageParams>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<ScheduleManagementPageListState>,
      action: PayloadAction<ScheduleManagementPageListFetchPageDataSuccessPayload>
    ) => {
      const { exercisesTimetable, studiosRooms } = action.payload

      state.exercisesTimetable = exercisesTimetable
      state.studiosRooms = studiosRooms
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<ScheduleManagementPageListState>) => {
      state.isLoading = false
      state.isLoaded = true
    },
    cancelSchedule: (state: Draft<ScheduleManagementPageListState>, _: PayloadAction<string>) => {
      state.isCanceling = true
    },
    cancelScheduleSuccess: (state: Draft<ScheduleManagementPageListState>) => {
      state.isCanceling = false
    },
    cancelScheduleError: (state: Draft<ScheduleManagementPageListState>) => {
      state.isCanceling = false
    },
    reset: () => initialState,
  },
})
