import * as React from 'react'
import { Form } from 'antd'
import { useDispatch } from 'react-redux'

import { TransactionsFormValues } from '../../components/transactions/transactions-form/transactions-form.types'
import { transactionsCreatePageTableActions } from '../../store/pages/transactions-create-page/transactions-create-page-table/transactions-create-page-table.slice'
import { transactionsCreatePageModalProductsActions } from '../../store/pages/transactions-create-page/transactions-create-page-modal-products/transactions-create-page-modal-products.slice'
import { transactionsCreatePageSubmitActions } from '../../store/pages/transactions-create-page/transactions-create-page-submit/transactions-create-page-submit.slice'

export function useTransactionsCreatePage() {
  const [form] = Form.useForm<TransactionsFormValues>()

  const dispatch = useDispatch()

  React.useEffect(() => {
    return () => {
      dispatch(transactionsCreatePageTableActions.reset())
      dispatch(transactionsCreatePageModalProductsActions.reset())
      dispatch(transactionsCreatePageSubmitActions.reset())
    }
  }, [dispatch])

  return { form }
}
