import * as React from 'react'
import { Table } from 'antd'
import { ExpandedRowRender } from 'rc-table/lib/interface'

import { TransactionsTableDataItem } from '../transactions-table.types'
import { genTransactionsTableProductsColumns } from './transactions-table-products.utils'

export const expandedRowRender: ExpandedRowRender<TransactionsTableDataItem> = (record: TransactionsTableDataItem) => {
  const columns = genTransactionsTableProductsColumns()

  return <Table dataSource={record.products} columns={columns} pagination={false} />
}
