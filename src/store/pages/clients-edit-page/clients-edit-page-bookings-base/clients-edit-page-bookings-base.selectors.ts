import { createSelector } from '@reduxjs/toolkit'

import { ClientsEditPageBookingsReducerName } from './clients-edit-page-bookings-base.types'
import { AppState } from '../../../app.store'
import { mapClientsBookingsToClientsBookingsTableBaseDataItems } from '../../../../mapping/clients-bookings.mapping'
import { Dict, isDef, isDefAndNotEmpty } from '../../../../types/lang.types'
import { ClientsBookingsApi } from '../../../../api/types/clients-bookings-api.types'
import { mapTransactionsReceiptsToReceiptsListItemDataList } from '../../../../mapping/transactions.mapping'

export function genClientsEditPageBookingsSelectors(reducerName: ClientsEditPageBookingsReducerName) {
  const getClientsBookingsInternal = (state: AppState) => state.clientsEditPage[reducerName].bookings

  const getClientBookingIdInternal = (state: AppState, id: string) => id

  const getIsLoaded = (state: AppState) => state.clientsEditPage[reducerName].isLoaded
  const getIsLoading = (state: AppState) => state.clientsEditPage[reducerName].isLoading

  const getTableDataItems = createSelector(getClientsBookingsInternal, bookings =>
    mapClientsBookingsToClientsBookingsTableBaseDataItems(bookings?.content)
  )

  const getTotalElements = createSelector(getClientsBookingsInternal, bookings => bookings?.totalElements)

  const getClientsBookingsMapByIdInternal = createSelector(getClientsBookingsInternal, bookings => {
    if (isDef(bookings)) {
      const { content } = bookings

      if (isDefAndNotEmpty(content)) {
        return content.reduce<Dict<ClientsBookingsApi.ClientBooking>>((acc, booking) => {
          acc[booking.id] = booking

          return acc
        }, {})
      }
    }

    return null
  })

  const getClientBookingById = createSelector(
    getClientsBookingsMapByIdInternal,
    getClientBookingIdInternal,
    (bookingsMap, bookingId) => {
      if (isDef(bookingsMap)) {
        return bookingsMap[bookingId]
      }

      return null
    }
  )

  const getReceiptsById = createSelector([getClientBookingById], booking => {
    if (isDef(booking)) {
      return mapTransactionsReceiptsToReceiptsListItemDataList(booking.receipts)
    }

    return null
  })

  return {
    getIsLoaded,
    getIsLoading,
    getTableDataItems,
    getTotalElements,
    getReceiptsById,
  }
}
