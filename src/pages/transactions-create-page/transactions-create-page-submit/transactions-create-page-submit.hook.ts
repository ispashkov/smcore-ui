import * as React from 'react'
import { FormInstance } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { TransactionsFormValues } from '../../../components/transactions/transactions-form/transactions-form.types'
import { transactionsCreatePageSubmitActions } from '../../../store/pages/transactions-create-page/transactions-create-page-submit/transactions-create-page-submit.slice'
import { getTransactionsCreatePageTableProducts } from '../../../store/pages/transactions-create-page/transactions-create-page-table/transactions-create-page-table.selectors'

export function useTransactionsCreatePageSubmit(form: FormInstance<TransactionsFormValues>) {
  const dispatch = useDispatch()

  const products = useSelector(getTransactionsCreatePageTableProducts)

  const onSubmitHandler = React.useCallback(() => {
    const values = form.getFieldsValue()
    dispatch(transactionsCreatePageSubmitActions.createTransaction(values))
  }, [dispatch, form])

  const isValid = isDefAndNotEmpty(products)

  return {
    onSubmitHandler,
    isValid,
  }
}
