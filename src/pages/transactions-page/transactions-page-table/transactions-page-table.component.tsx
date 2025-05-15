import * as React from 'react'

import { isDefAndNotEmpty } from '../../../types/lang.types'
import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { TransactionsTable } from '../../../components/transactions/transactions-table/transactions-table.component'
import { useTransactionsPageTable } from './transactions-page-table.hook'

export const TransactionsPageTable: React.FC = () => {
  const { transactions, pagination, isLoading, onChangePageHandler, onChangePageSizeHandler, onBarcodeHandler } =
    useTransactionsPageTable()

  if (isDefAndNotEmpty(transactions)) {
    return (
      <TransactionsTable
        data={transactions}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onBarcode={onBarcodeHandler}
      />
    )
  }

  return <PageEmpty description="Транзакций не найдено" />
}
