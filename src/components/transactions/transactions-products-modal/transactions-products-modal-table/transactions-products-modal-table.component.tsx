import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'

import { genTransactionsProductsModalTableColumns } from './transactions-products-modal-table.utils'
import { TransactionsProductsModalTableProps } from './transactions-products-modal-table.types'
import './transactions-products-modal-table.styles.less'

export const TransactionsProductsModalTable: React.FC<TransactionsProductsModalTableProps> = props => {
  const { data, loading, pagination } = props
  const { onAdd, onChangePage, onChangePageSize } = props

  const columns = React.useMemo(
    () =>
      genTransactionsProductsModalTableColumns({
        onAdd,
      }),
    [onAdd]
  )

  const paginationConfig = React.useMemo(
    (): TablePaginationConfig => ({
      ...pagination,
      onChange: onChangePage,
      onShowSizeChange: onChangePageSize,
    }),
    [onChangePage, onChangePageSize, pagination]
  )

  return (
    <Table
      className="transactions-products-modal-table"
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={paginationConfig}
      rowKey="id"
      showHeader={false}
    />
  )
}
