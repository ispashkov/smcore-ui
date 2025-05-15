import { AppModalBaseProps } from '../../../types/modal.types'

export interface TransactionsConfirmModalProps extends AppModalBaseProps {
  transactionId: string
  transactionTotal: number
  onSubmit: (transactionId: string) => void
}
