import { Table, TablePaginationConfig } from 'antd'
import * as React from 'react'
import { ColumnsType } from 'antd/lib/table'

import { ProductsServicesTableActions, ProductsServicesTableRow } from './products-services-table.types'
import { genProductsServicesTableColumns } from './products-services-table.utils'
import './products-services-table.styles.less'

interface Props extends ProductsServicesTableActions {
  className?: string
  data: ProductsServicesTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const ProductsServicesTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<ProductsServicesTableRow> = React.useMemo(
    () => genProductsServicesTableColumns({ onEdit, onRemove }),
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
