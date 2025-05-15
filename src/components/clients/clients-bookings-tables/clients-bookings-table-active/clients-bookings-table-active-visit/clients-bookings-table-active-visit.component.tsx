import * as React from 'react'

import { TableCellVisit } from '../../../../table-cells/table-cell-visit/table-cell-visit.component'
import { ClientsBookingsTableActiveVisitEvents } from './clients-bookings-table-active-visit.types'

interface Props extends ClientsBookingsTableActiveVisitEvents {
  exerciseId: string
  bookingId: string
  isChecked: boolean
}

export const ClientsBookingsTableActiveVisit: React.FC<Props> = props => {
  const { exerciseId, bookingId, isChecked } = props
  const { onVisit } = props

  const onVisitHandler = React.useCallback(
    (bookingId: string, checked: boolean): void => {
      onVisit(bookingId, exerciseId, checked)
    },
    [exerciseId, onVisit]
  )

  return <TableCellVisit id={bookingId} isChecked={isChecked} onVisit={onVisitHandler} />
}
