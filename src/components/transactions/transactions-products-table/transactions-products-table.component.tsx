import * as React from 'react'
import { Table } from 'antd'

import { genTransactionsProductsTableColumns } from './transactions-products-table.utils'
import { TransactionsFormProductsTableProps } from './transactions-products-table.types'

export const TransactionsProductsTable: React.FC<TransactionsFormProductsTableProps> = props => {
  const { data } = props
  const { onRemove, onChangeAmount } = props

  const columns = React.useMemo(
    () => genTransactionsProductsTableColumns({ onRemove, onChangeAmount }),
    [onRemove, onChangeAmount]
  )

  return <Table dataSource={data} columns={columns} pagination={false} rowKey="id" />
}
