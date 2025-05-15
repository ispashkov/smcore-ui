import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { genStudiosTableColumns } from './studios-table.utils'
import './studios-table.styles.less'
import { StudiosTableActions, StudiosTableRow } from './studios-table.types'

interface Props extends StudiosTableActions {
  className?: string
  data: StudiosTableRow[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const StudiosTable: React.FC<Props> = props => {
  const { data, pagination, loading } = props
  const { onEdit, onRemove, onChangePage, onChangePageSize } = props

  const columns: ColumnsType<StudiosTableRow> = React.useMemo(
    () => genStudiosTableColumns({ onEdit, onRemove }),
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
