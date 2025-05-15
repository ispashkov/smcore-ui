import { TransactionsConfirmModalProps } from '../../../components/transactions/transactions-confirm-modal/transactions-confirm-modal.types'
import { AppModalBaseProps } from '../../../types/modal.types'

export interface TransactionsCreatePageModalConfirmProps
  extends AppModalBaseProps,
    Pick<TransactionsConfirmModalProps, 'transactionId' | 'transactionTotal'> {
  studioId: string
}
