import * as React from 'react'
import { ColumnsType } from 'antd/es/table'

import { ClientsBookingsTableBaseDataItem } from '../clients-bookings-table-base/clients-bookings-table-base.types'
import { genClientsBookingsTableBaseColumns } from '../clients-bookings-table-base/clients-bookings-table-base.utils'
import { ClientsBookingsTableActiveVisit } from './clients-bookings-table-active-visit/clients-bookings-table-active-visit.component'
import { ClientsBookingsTableActiveActions } from './clients-bookings-table-active-actions/clients-bookings-table-active-actions.component'
import { ClientsBookingsTableActiveEvents } from './clients-bookings-table-active.types'

export function genClientsBookingsTableActiveColumns(
  events: ClientsBookingsTableActiveEvents
): ColumnsType<ClientsBookingsTableBaseDataItem> {
  const { onVisit, onBarcode, onCancel } = events

  return [
    ...genClientsBookingsTableBaseColumns(),
    {
      title: 'Посещение',
      dataIndex: 'visitConfirmed',
      key: 'visitConfirmed',
      render: (_, booking) => {
        const { id, exerciseId, visitConfirmed } = booking

        return (
          <ClientsBookingsTableActiveVisit
            bookingId={id}
            exerciseId={exerciseId}
            isChecked={visitConfirmed}
            onVisit={onVisit}
          />
        )
      },
    },
    {
      title: 'Дествия',
      key: 'actions',
      render: (_, booking) => {
        const { id, exerciseId } = booking

        return (
          <ClientsBookingsTableActiveActions
            bookingId={id}
            exerciseId={exerciseId}
            onBarcode={onBarcode}
            onCancel={onCancel}
          />
        )
      },
    },
  ]
}
