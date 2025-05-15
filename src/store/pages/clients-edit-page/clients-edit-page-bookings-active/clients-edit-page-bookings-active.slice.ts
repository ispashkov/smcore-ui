import { Draft, PayloadAction } from '@reduxjs/toolkit'

import {
  ClientsEditPageBookingsBaseState,
  genClientEditPageBookingsBaseSlice,
} from '../clients-edit-page-bookings-base/clients-edit-page-bookings-base.utils'
import {
  ClientsEditPageBookingsActiveCancelBookingPayload,
  ClientsEditPageBookingsActiveChangeBookingVisitingConfirmationPayload,
} from './clients-edit-page-bookings-active.types'

export const { actions: clientsEditPageBookingsActiveActions, reducer: clientsEditPageBookingsActiveReducer } =
  genClientEditPageBookingsBaseSlice({
    name: '@@clients-edit-page-bookings-active',
    reducers: {
      changeBookingVisitingConfirmation: (
        state: Draft<ClientsEditPageBookingsBaseState>,
        _: PayloadAction<ClientsEditPageBookingsActiveChangeBookingVisitingConfirmationPayload>
      ) => {
        state.isLoading = true
      },
      changeBookingVisitingConfirmationSuccess: (state: Draft<ClientsEditPageBookingsBaseState>) => {
        state.isLoading = false
      },
      changeBookingVisitingConfirmationError: (
        state: Draft<ClientsEditPageBookingsBaseState>,
        action: PayloadAction<Error>
      ) => {
        state.isLoading = false
        state.error = action.payload
      },

      cancelBooking: (
        state: Draft<ClientsEditPageBookingsBaseState>,
        _action: PayloadAction<ClientsEditPageBookingsActiveCancelBookingPayload>
      ) => {
        state.isLoading = true
      },
      cancelBookingSuccess: (state: Draft<ClientsEditPageBookingsBaseState>) => {
        state.isLoading = false
      },
      cancelBookingError: (state: Draft<ClientsEditPageBookingsBaseState>, action: PayloadAction<Error>) => {
        state.isLoading = false
        state.error = action.payload
      },
    },
  })
