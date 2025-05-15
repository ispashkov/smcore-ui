import * as React from 'react'
import { Button } from 'antd'

import { TransactionsPageFilterProducts } from './transactions-page-filter-products/transactions-page-filter-products.component'
import { TransactionsPageFilterDate } from './transactions-page-filter-date/transactions-page-filter-date.component'
import { useTransactionsPageFilter } from './transactions-page-filter.hook'
import './transactions-page-filter.styles.less'

export const TransactionsPageFilter: React.FC = () => {
  const { onCreateHandler } = useTransactionsPageFilter()

  return (
    <div className="transactions-page-filter">
      <div className="transactions-page-filter__toolbar">
        <TransactionsPageFilterProducts />
        <TransactionsPageFilterDate />
      </div>

      <Button className="transactions-page-filter__create" type="primary" onClick={onCreateHandler}>
        Создать транзакцию
      </Button>
    </div>
  )
}
