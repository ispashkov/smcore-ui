import * as React from 'react'

import { ReceiptsModal } from '../../../components/receipts/receipts-modal/receipts-modal.component'
import { TransactionsPageReceiptsModalProps } from './transactions-page-receipts-modal.types'
import { useTransactionsPageReceiptsModal } from './transactions-page-receipts-modal.hook'

export const TransactionsPageReceiptsModal: React.FC<TransactionsPageReceiptsModalProps> = props => {
  const { transactionId } = props

  const { receipts, onCancelHandler } = useTransactionsPageReceiptsModal(transactionId)

  return <ReceiptsModal title="Чеки по транзакции" receipts={receipts} onCancel={onCancelHandler} />
}
