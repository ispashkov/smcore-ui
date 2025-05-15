import * as React from 'react'
import { FormInstance } from 'antd'

import { TransactionsForm } from '../../../components/transactions/transactions-form/transactions-form.component'
import { TransactionsFormValues } from '../../../components/transactions/transactions-form/transactions-form.types'

interface Props {
  form: FormInstance<TransactionsFormValues>
}

export const TransactionsCreatePageForm: React.FC<Props> = props => {
  const { form } = props

  return <TransactionsForm form={form} />
}
