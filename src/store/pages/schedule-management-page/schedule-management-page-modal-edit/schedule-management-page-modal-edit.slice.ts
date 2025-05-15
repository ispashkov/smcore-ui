import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { ExercisesTimetableApi } from '../../../../api/types/exercises-timetable-api.types'
import { Nullable } from '../../../../types/lang.types'
import { ScheduleManagementPageModalEditUpdateSchedulePayload } from './schedule-management-page-modal-edit.types'

export interface ScheduleManagementPageModalEdit {
  exercisesTimetable: Nullable<ExercisesTimetableApi.ExercisesTimetable>
  isLoading: boolean
  error: Nullable<Error>
}

const initialState: ScheduleManagementPageModalEdit = {
  exercisesTimetable: null,
  isLoading: false,
  error: null,
}

export const { actions: scheduleManagementPageModalEditActions, reducer: scheduleManagementPageModalEditReducer } =
  createSlice({
    name: '@@schedule-management-page-modal-edit',
    initialState,
    reducers: {
      fetchSchedule: (state: Draft<ScheduleManagementPageModalEdit>, _: PayloadAction<string>): void => {
        state.isLoading = true
      },
      fetchScheduleSuccess: (
        state: Draft<ScheduleManagementPageModalEdit>,
        action: PayloadAction<ExercisesTimetableApi.ExercisesTimetable>
      ): void => {
        state.exercisesTimetable = action.payload
        state.isLoading = false
      },
      fetchScheduleError: (state: Draft<ScheduleManagementPageModalEdit>, action: PayloadAction<Error>): void => {
        state.error = action.payload
        state.isLoading = false
      },
      updateSchedule: (
        state: Draft<ScheduleManagementPageModalEdit>,
        _: PayloadAction<ScheduleManagementPageModalEditUpdateSchedulePayload>
      ): void => {
        state.isLoading = true
      },
      updateScheduleSuccess: (state: Draft<ScheduleManagementPageModalEdit>): void => {
        state.isLoading = false
      },
      updateScheduleError: (state: Draft<ScheduleManagementPageModalEdit>, action: PayloadAction<Error>): void => {
        state.error = action.payload
        state.isLoading = false
      },
      reset: () => initialState,
    },
  })
