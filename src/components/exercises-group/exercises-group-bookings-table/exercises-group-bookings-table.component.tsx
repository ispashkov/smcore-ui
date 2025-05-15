import * as React from 'react'
import { Table, TablePaginationConfig } from 'antd'

import { genExercisesGroupBookingsTableColumns } from './exercises-group-bookings-table.utils'
import {
  ExercisesGroupBookingsTableDataItem,
  ExercisesGroupBookingsTableEvents,
} from './exercises-group-bookings-table.types'

interface Props extends ExercisesGroupBookingsTableEvents {
  className?: string
  data: ExercisesGroupBookingsTableDataItem[]
  pagination?: TablePaginationConfig
  loading?: boolean
  onChangePage: (page: number, pageSize: number) => void
  onChangePageSize: (pageSize: number) => void
}

export const ExercisesGroupBookingsTable: React.FC<Props> = props => {
  const { className } = props
  const { data, pagination, loading } = props
  const { onVisit, onComment, onCancel, onChangePage, onChangePageSize } = props

  const columns = React.useMemo(
    () =>
      genExercisesGroupBookingsTableColumns({
        onVisit,
        onComment,
        onCancel,
      }),
    [onVisit, onComment, onCancel]
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
      className={className}
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
      loading={loading}
    />
  )
}
