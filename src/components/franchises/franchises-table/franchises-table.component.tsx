import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { FranchisesTableActions, FranchisesTableRow } from './franchises-table.types'
import { genFranchisesTableColumns } from './franchises-table.utils'

import './franchises-table.styles.less'

interface Props extends FranchisesTableActions {
  className?: string
  data: FranchisesTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const FranchisesTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<FranchisesTableRow> = React.useMemo(
    () => genFranchisesTableColumns({ onEdit, onRemove }),
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
