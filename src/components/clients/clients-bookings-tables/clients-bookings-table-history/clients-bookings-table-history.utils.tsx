import * as React from 'react'
import { ColumnsType } from 'antd/es/table'

import { ClientsBookingsTableBaseDataItem } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { genClientsBookingsTableBaseColumns } from '../clients-bookings-table-base/clients-bookings-table-base.utils'
import { ClientsBookingsTableHistoryStatus } from './clients-bookings-table-history-status/clients-bookings-table-history-status.component'
import { ClientsBookingsTableHistoryActions } from './clients-bookings-table-history-actions/clients-bookings-table-history-actions.component'
import { ClientsBookingsTableHistoryEvents } from './clients-bookings-table-history.types'

export function genClientsBookingsTableHistoryColumns(
  events: ClientsBookingsTableHistoryEvents
): ColumnsType<ClientsBookingsTableBaseDataItem> {
  const { onBarcode } = events

  return [
    ...genClientsBookingsTableBaseColumns(),
    {
      title: 'Статус',
      key: 'status',
      render: (_, booking) => {
        const { visitConfirmed, canceled } = booking

        return <ClientsBookingsTableHistoryStatus isCanceled={canceled} isVisitConfirmed={visitConfirmed} />
      },
    },
    {
      title: 'Дествия',
      key: 'actions',
      render: (_, booking) => {
        const { id, exerciseId } = booking

        return <ClientsBookingsTableHistoryActions bookingId={id} exerciseId={exerciseId} onBarcode={onBarcode} />
      },
    },
  ]
}
