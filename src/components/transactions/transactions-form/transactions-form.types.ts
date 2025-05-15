import { FormInstance } from 'antd'

import { PaymentMethod } from '../../../types/payment.types'

export interface TransactionsFormProps {
  form: FormInstance<TransactionsFormValues>
}

export interface TransactionsFormValues {
  phone: string
  paymentMethod: PaymentMethod
}
