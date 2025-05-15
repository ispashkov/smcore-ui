import * as React from 'react'

import { ReceiptsModal } from '../../../components/receipts/receipts-modal/receipts-modal.component'
import { useClientsEditPageBookingsActiveReceiptsModal } from './clients-edit-page-bookings-active-receipts-modal.hook'
import { ClientsEditPageBookingsActiveReceiptsModalProps } from './clients-edit-page-bookings-active-receipts-modal.types'

export const ClientsEditPageBookingsActiveReceiptsModal: React.FC<
  ClientsEditPageBookingsActiveReceiptsModalProps
> = props => {
  const { bookingId } = props

  const { receipts, onCancelHandler } = useClientsEditPageBookingsActiveReceiptsModal(bookingId)

  return <ReceiptsModal title="Чеки по транзакции" receipts={receipts} onCancel={onCancelHandler} />
}
