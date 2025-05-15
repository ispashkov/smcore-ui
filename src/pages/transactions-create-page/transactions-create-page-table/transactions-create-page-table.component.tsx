import * as React from 'react'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { TransactionsProductsTable } from '../../../components/transactions/transactions-products-table/transactions-products-table.component'
import { useTransactionsCreatePageTable } from './transactions-create-page-table.hook'

export const TransactionsCreatePageTable = () => {
  const { products, onRemoveHandler, onChangeAmountHandler } = useTransactionsCreatePageTable()

  if (isDefAndNotEmpty(products)) {
    return (
      <TransactionsProductsTable data={products} onRemove={onRemoveHandler} onChangeAmount={onChangeAmountHandler} />
    )
  }

  return null
}
