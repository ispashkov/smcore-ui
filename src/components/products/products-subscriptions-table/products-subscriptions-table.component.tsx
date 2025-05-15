import { Table, TablePaginationConfig } from 'antd'
import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'

import { ProductsSubscriptionsTableActions, ProductsSubscriptionsTableRow } from './products-subscriptions-table.types'
import { genProductsSubscriptionsTableColumns } from './products-subscriptions-table.utils'
import './products-subscriptions-table.styles.less'

interface Props extends ProductsSubscriptionsTableActions {
  className?: string
  data: ProductsSubscriptionsTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const ProductsSubscriptionsTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<ProductsSubscriptionsTableRow> = React.useMemo(
    () => genProductsSubscriptionsTableColumns({ onEdit, onRemove }),
    [onEdit, onRemove]
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
      className="table"
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
      loading={loading}
    />
  )
}
