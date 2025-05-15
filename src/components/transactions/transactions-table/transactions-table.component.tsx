import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandableConfig } from 'rc-table/lib/interface'

import { TransactionsTableActionsEvents } from './transactions-table-actions/transactions-table-actions.types'
import {
  genTransactionsTableColumns,
  genTransactionsTableExpandedRowRender,
  genTransactionsTableRowExpandable,
} from './transactions-table.utils'
import { TransactionsTableDataItem } from './transactions-table.types'

interface Props extends TransactionsTableActionsEvents {
  data: TransactionsTableDataItem[]
  loading?: boolean
  pagination?: TablePaginationConfig
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const TransactionsTable: React.FC<Props> = props => {
  const { data, loading, pagination } = props
  const { onChangePage, onChangePageSize } = props
  const { onBarcode } = props

  const columns: ColumnsType<TransactionsTableDataItem> = React.useMemo(
    () =>
      genTransactionsTableColumns({
        onBarcode,
      }),
    [onBarcode]
  )

  const paginationConfig = React.useMemo(
    (): TablePaginationConfig => ({
      ...pagination,
      onChange: onChangePage,
      onShowSizeChange: onChangePageSize,
    }),
    [onChangePage, onChangePageSize, pagination]
  )

  const expandable: ExpandableConfig<TransactionsTableDataItem> = React.useMemo(
    () => ({
      expandedRowRender: genTransactionsTableExpandedRowRender,
      rowExpandable: genTransactionsTableRowExpandable,
    }),
    []
  )

  const scroll = React.useMemo(() => ({ x: 1500 }), [])

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={paginationConfig}
      expandable={expandable}
      scroll={scroll}
      rowKey="id"
    />
  )
}
