import * as React from 'react'

import { formatRublesPenniesCurrency } from '../../../format/number.format'
import { ModalConfirm } from '../../modals/modal-confirm/modal-confirm.component'
import { TransactionsConfirmModalProps } from './transactions-confirm-modal.types'

export const TransactionsConfirmModal: React.FC<TransactionsConfirmModalProps> = props => {
  const { transactionId, transactionTotal } = props
  const { onCancel, onSubmit } = props

  const description = `Подтвердите оплату покупки на сумму ${formatRublesPenniesCurrency(transactionTotal)}`

  const onSubmitHandler = React.useCallback((): void => {
    onSubmit(transactionId)
  }, [transactionId, onSubmit])

  return (
    <ModalConfirm
      type="info"
      title="Подтверждение оплаты"
      description={description}
      onSubmit={onSubmitHandler}
      onCancel={onCancel}
    />
  )
}
