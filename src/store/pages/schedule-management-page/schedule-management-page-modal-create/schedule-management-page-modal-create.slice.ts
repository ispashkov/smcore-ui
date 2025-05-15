import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { ScheduleFormValuesDTO } from '../../../../components/schedule/schedule-form/schedule-form.types'

export interface ScheduleManagementPageModalCreate {
  isLoading: boolean
  error: Nullable<Error>
}

const initialState: ScheduleManagementPageModalCreate = {
  isLoading: false,
  error: null,
}

export const { actions: scheduleManagementPageModalCreateActions, reducer: scheduleManagementPageModalCreateReducer } =
  createSlice({
    name: '@@schedule-management-page-modal-create',
    initialState,
    reducers: {
      createSchedule: (state: Draft<ScheduleManagementPageModalCreate>, _: PayloadAction<ScheduleFormValuesDTO>) => {
        state.isLoading = true
      },
      createScheduleSuccess: (state: Draft<ScheduleManagementPageModalCreate>) => {
        state.isLoading = false
      },
      createScheduleError: (state: Draft<ScheduleManagementPageModalCreate>, action: PayloadAction<Error>) => {
        state.error = action.payload
        state.isLoading = false
      },
      reset: () => initialState,
    },
  })
