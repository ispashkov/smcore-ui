import * as React from 'react'

import { TransactionsConfirmModal } from '../../../components/transactions/transactions-confirm-modal/transactions-confirm-modal.component'
import { useTransactionsCreatePageModalConfirm } from './transactions-create-page-modal-confirm.hook'
import { TransactionsCreatePageModalConfirmProps } from './transactions-create-page-modal-confirm.types'

export const TransactionsCreatePageModalConfirm: React.FC<TransactionsCreatePageModalConfirmProps> = props => {
  const { transactionId, transactionTotal, studioId } = props

  const { onCancelHandler, onSubmitHandler } = useTransactionsCreatePageModalConfirm({ transactionId, studioId })

  return (
    <TransactionsConfirmModal
      transactionId={transactionId}
      transactionTotal={transactionTotal}
      onSubmit={onSubmitHandler}
      onCancel={onCancelHandler}
    />
  )
}
