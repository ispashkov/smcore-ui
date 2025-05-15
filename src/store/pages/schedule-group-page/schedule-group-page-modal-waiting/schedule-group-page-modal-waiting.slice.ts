import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import {
  ScheduleGroupPageModalWaitingBookClient,
  ScheduleGroupPageModalWaitingFetchWaitingListPayload,
} from './schedule-group-page-modal-waiting.types'

export interface ScheduleGroupPageModalWaitingState {
  waitingList: Nullable<Pagination<ExercisesApi.ExerciseWaitListItem>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ScheduleGroupPageModalWaitingState = {
  waitingList: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: scheduleGroupPageModalWaitingActions, reducer: scheduleGroupPageModalWaitingReducer } =
  createSlice({
    name: '@@schedule-group-page-modal-waiting',
    initialState,
    reducers: {
      fetchWaitingList: (
        state: Draft<ScheduleGroupPageModalWaitingState>,
        _: PayloadAction<ScheduleGroupPageModalWaitingFetchWaitingListPayload>
      ) => {
        state.isLoading = true
      },
      fetchWaitingListSuccess: (
        state: Draft<ScheduleGroupPageModalWaitingState>,
        action: PayloadAction<Nullable<Pagination<ExercisesApi.ExerciseWaitListItem>>>
      ) => {
        state.waitingList = action.payload
        state.isLoaded = true
        state.isLoading = false
      },
      fetchWaitingListError: (state: Draft<ScheduleGroupPageModalWaitingState>, action: PayloadAction<Error>) => {
        state.error = action.payload
        state.isLoaded = true
        state.isLoading = false
      },
      bookClient: (
        state: Draft<ScheduleGroupPageModalWaitingState>,
        _action: PayloadAction<ScheduleGroupPageModalWaitingBookClient>
      ) => {},

      reset: () => initialState,
    },
  })
