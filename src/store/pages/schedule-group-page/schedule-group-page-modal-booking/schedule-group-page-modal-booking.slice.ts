import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { ScheduleGroupPageModalBookingCreateBookingPayload } from './schedule-group-page-modal-booking.types'

export interface ScheduleGroupPageModalBookingState {
  exercisesSpots: Nullable<ExercisesApi.ExerciseSpot[]>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ScheduleGroupPageModalBookingState = {
  exercisesSpots: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: scheduleGroupPageModalBookingActions, reducer: scheduleGroupPageModalBookingReducer } =
  createSlice({
    name: '@@schedule-group-page-modal-booking',
    initialState,
    reducers: {
      fetchExercisesSpots: (state: Draft<ScheduleGroupPageModalBookingState>, _: PayloadAction<string>): void => {
        state.isLoading = true
      },
      fetchExercisesSpotsSuccess: (
        state: Draft<ScheduleGroupPageModalBookingState>,
        action: PayloadAction<Nullable<ExercisesApi.ExerciseSpot[]>>
      ): void => {
        state.isLoading = false
        state.isLoaded = true
        state.exercisesSpots = action.payload
      },
      fetchExercisesSpotsError: (
        state: Draft<ScheduleGroupPageModalBookingState>,
        action: PayloadAction<Error>
      ): void => {
        state.isLoading = false
        state.isLoaded = true
        state.error = action.payload
      },

      createBooking: (
        state: Draft<ScheduleGroupPageModalBookingState>,
        _: PayloadAction<ScheduleGroupPageModalBookingCreateBookingPayload>
      ): void => {
        state.isLoading = true
      },
      createBookingSuccess: (state: Draft<ScheduleGroupPageModalBookingState>): void => {
        state.isLoading = false
      },
      createBookingError: (state: Draft<ScheduleGroupPageModalBookingState>, action: PayloadAction<Error>): void => {
        state.isLoading = false
        state.error = action.payload
      },

      reset: () => initialState,
    },
  })
