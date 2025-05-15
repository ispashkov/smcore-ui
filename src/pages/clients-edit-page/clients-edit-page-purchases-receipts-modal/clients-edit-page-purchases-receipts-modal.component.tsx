import * as React from 'react'

import { ReceiptsModal } from '../../../components/receipts/receipts-modal/receipts-modal.component'
import { useClientsEditPagePurchasesReceiptsModal } from './clients-edit-page-purchases-receipts-modal.hook'
import { ClientsEditPagePurchasesReceiptsModalProps } from './clients-edit-page-purchases-receipts-modal.types'

export const ClientsEditPagePurchasesReceiptsModal: React.FC<ClientsEditPagePurchasesReceiptsModalProps> = props => {
  const { transactionId } = props

  const { receipts, onCancelHandler } = useClientsEditPagePurchasesReceiptsModal(transactionId)

  return <ReceiptsModal title="Чеки по транзакции" receipts={receipts} onCancel={onCancelHandler} />
}
