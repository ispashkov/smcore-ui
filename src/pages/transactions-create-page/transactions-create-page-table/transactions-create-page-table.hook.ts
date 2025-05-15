import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTransactionsCreatePageTableProductsTableDataItems } from '../../../store/pages/transactions-create-page/transactions-create-page-table/transactions-create-page-table.selectors'
import { transactionsCreatePageTableActions } from '../../../store/pages/transactions-create-page/transactions-create-page-table/transactions-create-page-table.slice'

export function useTransactionsCreatePageTable() {
  const dispatch = useDispatch()

  const products = useSelector(getTransactionsCreatePageTableProductsTableDataItems)

  const onRemoveHandler = React.useCallback(
    (productId: string): void => {
      dispatch(transactionsCreatePageTableActions.removeProduct(productId))
    },
    [dispatch]
  )

  const onChangeAmountHandler = React.useCallback(
    (productId: string, amount: number) => {
      dispatch(transactionsCreatePageTableActions.changeAmount({ productId, amount }))
    },
    [dispatch]
  )

  return {
    products,
    onRemoveHandler,
    onChangeAmountHandler,
  }
}
