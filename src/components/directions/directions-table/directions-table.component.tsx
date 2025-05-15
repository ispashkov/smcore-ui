import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { DirectionsTableActions, DirectionsTableRow } from './directions-table.types'
import { genDirectionsTableColumns } from './directions-table.utils'

interface Props extends DirectionsTableActions {
  className?: string
  data: DirectionsTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const DirectionsTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<DirectionsTableRow> = React.useMemo(
    () => genDirectionsTableColumns({ onEdit, onRemove }),
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
