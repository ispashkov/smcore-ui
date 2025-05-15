import { genClientEditPageBookingsBaseSlice } from '../clients-edit-page-bookings-base/clients-edit-page-bookings-base.utils'

export const { actions: clientsEditPageBookingsHistoryActions, reducer: clientsEditPageBookingsHistoryReducer } =
  genClientEditPageBookingsBaseSlice({
    name: '@@clients-edit-page-bookings-history',
    reducers: {},
  })
