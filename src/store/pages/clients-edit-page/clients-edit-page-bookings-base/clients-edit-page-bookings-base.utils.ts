import { createSlice, Draft, PayloadAction, CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ClientsBookingsApi } from '../../../../api/types/clients-bookings-api.types'
import { ClientsEditPageBookingsBaseFetchBookingsPayload } from './clients-edit-page-bookings-base.types'

export interface ClientsEditPageBookingsBaseState {
  bookings: Nullable<Pagination<ClientsBookingsApi.ClientBooking>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

type GenClientEditPageBookingsBaseSliceOptions<
  CaseReducers extends SliceCaseReducers<ClientsEditPageBookingsBaseState>
> = {
  name: string
  reducers: CreateSliceOptions<ClientsEditPageBookingsBaseState, CaseReducers>['reducers']
}

export function genClientEditPageBookingsBaseSlice<
  CaseReducers extends SliceCaseReducers<ClientsEditPageBookingsBaseState>
>(options: GenClientEditPageBookingsBaseSliceOptions<CaseReducers>) {
  const { name, reducers } = options

  const initialState: ClientsEditPageBookingsBaseState = {
    bookings: null,
    isLoaded: false,
    isLoading: false,
    error: null,
  }

  return createSlice({
    name,
    initialState,
    reducers: {
      fetchBookings: (
        state: Draft<ClientsEditPageBookingsBaseState>,
        _action: PayloadAction<ClientsEditPageBookingsBaseFetchBookingsPayload>
      ) => {
        state.isLoading = true
      },
      fetchBookingsSuccess: (
        state: Draft<ClientsEditPageBookingsBaseState>,
        action: PayloadAction<Nullable<Pagination<ClientsBookingsApi.ClientBooking>>>
      ) => {
        state.bookings = action.payload
        state.isLoading = false
        state.isLoaded = true
      },
      fetchBookingsError: (state: Draft<ClientsEditPageBookingsBaseState>, action: PayloadAction<Error>) => {
        state.error = action.payload
        state.isLoading = false
        state.isLoaded = true
      },

      reset: () => initialState,

      ...reducers,
    },
  })
}
