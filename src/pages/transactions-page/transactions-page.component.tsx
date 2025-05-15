import * as React from 'react'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { TransactionsPageSearch } from './transactions-page-search/transactions-page-search.component'
import { TransactionsPageFilter } from './transactions-page-filter/transactions-page-filter.component'
import { TransactionsPageTable } from './transactions-page-table/transactions-page-table.component'
import { useTransactionsPage } from './transactions-page.hook'

export const TransactionsPage: React.FC = () => {
  const { isLoaded, isLoading } = useTransactionsPage()

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <TransactionsPageSearch />
      <TransactionsPageFilter />
      <TransactionsPageTable />
    </>
  )
}
