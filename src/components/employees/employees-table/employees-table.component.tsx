import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { genEmployeesTableColumns } from './employees-table.utils'
import { EmployeesTableActions, EmployeesTableRow } from './employees-table.types'
import './employees-table.styles.less'

interface Props extends EmployeesTableActions {
  className?: string
  data: EmployeesTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const EmployeesTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<EmployeesTableRow> = React.useMemo(
    () => genEmployeesTableColumns({ onEdit, onRemove }),
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
