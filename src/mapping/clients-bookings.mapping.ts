import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ClientsBookingsApi } from '../api/types/clients-bookings-api.types'
import { ClientsBookingsTableBaseDataItem } from '../components/clients/clients-bookings-tables/clients-bookings-table-base/clients-bookings-table-base.types'
import { mapDictionaryItemToEntityItem, mapPaymentTypeToClient } from './api.mapping'

export function mapClientsBookingsToClientsBookingsTableBaseDataItems(
  bookings: Nullable<ClientsBookingsApi.ClientBooking[]>
): Nullable<ClientsBookingsTableBaseDataItem[]> {
  if (isDefAndNotEmpty(bookings)) {
    return bookings.reduce<ClientsBookingsTableBaseDataItem[]>(
      (acc: ClientsBookingsTableBaseDataItem[], booking: ClientsBookingsApi.ClientBooking) => {
        const paymentType = mapPaymentTypeToClient(booking.paymentType)
        const exerciseDirection = mapDictionaryItemToEntityItem(booking.exerciseDirection)
        const studio = mapDictionaryItemToEntityItem(booking.studio)

        if (isDef(paymentType) && isDef(exerciseDirection) && isDef(studio)) {
          const clientsBookingsTableBaseDataItem: ClientsBookingsTableBaseDataItem = {
            id: booking.id,
            createDate: booking.createDate,
            visitConfirmed: booking.visitConfirmed,
            canceled: booking.isCancelled,
            exerciseId: booking.exerciseId,
            exerciseDirection,
            studio,
            paymentType,
          }

          acc.push(clientsBookingsTableBaseDataItem)
        }

        return acc
      },
      []
    )
  }

  return null
}
