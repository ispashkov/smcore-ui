import * as React from 'react'
import { Button, FormInstance } from 'antd'

import { TransactionsFormValues } from '../../../components/transactions/transactions-form/transactions-form.types'
import { useTransactionsCreatePageSubmit } from './transactions-create-page-submit.hook'
import './transactions-create-page-submit.styles.less'

interface Props {
  form: FormInstance<TransactionsFormValues>
}

export const TransactionsCreatePageSubmit: React.FC<Props> = props => {
  const { form } = props

  const { onSubmitHandler, isValid } = useTransactionsCreatePageSubmit(form)

  return (
    <Button className="transactions-create-page-submit" type="primary" onClick={onSubmitHandler} disabled={!isValid}>
      Отправить на оплату
    </Button>
  )
}
