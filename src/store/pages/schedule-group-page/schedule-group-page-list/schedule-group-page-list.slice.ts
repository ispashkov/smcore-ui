import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { Pagination } from '../../../../api/types/api.types'
import { NNumber, Nullable } from '../../../../types/lang.types'
import {
  ScheduleGroupPageListCancelBookingPayload,
  ScheduleGroupPageListChangeBookingVisitingConfirmationPayload,
  ScheduleGroupPageListFetchBookingsPayload,
  ScheduleGroupPageListFetchClientsInWaitingListPayload,
  ScheduleGroupPageListFetchPageDataPayload,
} from './schedule-group-page-list.types'

export interface ScheduleGroupPageListState {
  exercise: Nullable<ExercisesApi.Exercise>
  exerciseBookings: Nullable<Pagination<ExercisesApi.ExerciseBooking>>
  clientsInWaitingList: NNumber
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ScheduleGroupPageListState = {
  exercise: null,
  exerciseBookings: null,
  clientsInWaitingList: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: scheduleGroupPageListActions, reducer: scheduleGroupPageListReducer } = createSlice({
  name: '@@schedule-group-page-list',
  initialState,
  reducers: {
    fetchPageData: (
      state: Draft<ScheduleGroupPageListState>,
      _: PayloadAction<ScheduleGroupPageListFetchPageDataPayload>
    ) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (state: Draft<ScheduleGroupPageListState>) => {
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    fetchExercise: (state: Draft<ScheduleGroupPageListState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchExerciseSuccess: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<ExercisesApi.Exercise>) => {
      state.exercise = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchExerciseError: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    fetchBookings: (
      state: Draft<ScheduleGroupPageListState>,
      _: PayloadAction<ScheduleGroupPageListFetchBookingsPayload>
    ) => {
      state.isLoading = true
    },
    fetchBookingsSuccess: (
      state: Draft<ScheduleGroupPageListState>,
      action: PayloadAction<Pagination<ExercisesApi.ExerciseBooking>>
    ) => {
      state.exerciseBookings = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchBookingsError: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    fetchClientsInWaitingList: (
      state: Draft<ScheduleGroupPageListState>,
      action: PayloadAction<ScheduleGroupPageListFetchClientsInWaitingListPayload>
    ) => {
      state.isLoading = true
    },
    fetchClientsInWaitingListSuccess: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<NNumber>) => {
      state.clientsInWaitingList = action.payload
      state.isLoading = false
    },
    fetchClientsInWaitingListError: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
    },

    cancelBooking: (
      state: Draft<ScheduleGroupPageListState>,
      _: PayloadAction<ScheduleGroupPageListCancelBookingPayload>
    ) => {
      state.isLoading = true
    },
    cancelBookingSuccess: (state: Draft<ScheduleGroupPageListState>) => {
      state.isLoading = false
    },
    cancelBookingError: (state: Draft<ScheduleGroupPageListState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },

    changeBookingVisitingConfirmation: (
      state: Draft<ScheduleGroupPageListState>,
      _: PayloadAction<ScheduleGroupPageListChangeBookingVisitingConfirmationPayload>
    ) => {
      state.isLoading = true
    },
    changeBookingVisitingConfirmationSuccess: (state: Draft<ScheduleGroupPageListState>) => {
      state.isLoading = false
    },
    changeBookingVisitingConfirmationError: (
      state: Draft<ScheduleGroupPageListState>,
      action: PayloadAction<Error>
    ) => {
      state.isLoading = false
      state.error = action.payload
    },

    reset: () => initialState,
  },
})
