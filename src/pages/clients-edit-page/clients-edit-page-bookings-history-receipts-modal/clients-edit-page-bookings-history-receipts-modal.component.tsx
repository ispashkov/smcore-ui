import * as React from 'react'

import { ReceiptsModal } from '../../../components/receipts/receipts-modal/receipts-modal.component'
import { useClientsEditPageBookingsHistoryReceiptsModal } from './clients-edit-page-bookings-history-receipts-modal.hook'
import { ClientsEditPageBookingsHistoryReceiptsModalProps } from './clients-edit-page-bookings-history-receipts-modal.types'

export const ClientsEditPageBookingsHistoryReceiptsModal: React.FC<
  ClientsEditPageBookingsHistoryReceiptsModalProps
> = props => {
  const { bookingId } = props

  const { receipts, onCancelHandler } = useClientsEditPageBookingsHistoryReceiptsModal(bookingId)

  return <ReceiptsModal title="Чеки по транзакции" receipts={receipts} onCancel={onCancelHandler} />
}
