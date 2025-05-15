import * as React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { genScheduleTableColumns } from './schedule-table.utils'
import { ScheduleTableDataItem, ScheduleTableEvents } from './schedule-table.types'

interface Props extends ScheduleTableEvents {
  data: ScheduleTableDataItem[]
  loading?: boolean
}

export const ScheduleTable: React.FC<Props> = props => {
  const { data, loading } = props
  const { onEdit, onCancel } = props

  const columns: ColumnsType<ScheduleTableDataItem> = React.useMemo(
    () => genScheduleTableColumns({ onEdit, onCancel }),
    [onEdit, onCancel]
  )

  return (
    <Table className="table" rowKey="id" columns={columns} dataSource={data} loading={loading} pagination={false} />
  )
}
