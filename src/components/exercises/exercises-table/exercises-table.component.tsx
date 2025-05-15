import * as React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'

import { ExercisesTableEvents, ExercisesTableDataItem } from './exercises-table.types'
import { genExercisesTableColumns, genExercisesTableRowId } from './exercises-table.utils'
import './exercises-table.styles.less'

interface Props extends ExercisesTableEvents {
  className?: string
  data: ExercisesTableDataItem[]
  loading?: boolean
}

export const ExercisesTable: React.FC<Props> = props => {
  const { data, loading } = props
  const { onAdd, onComment, onView, onCancel } = props

  const columns: ColumnsType<ExercisesTableDataItem> = React.useMemo(
    () => genExercisesTableColumns({ onAdd, onComment, onView, onCancel }),
    [onAdd, onCancel, onComment, onView]
  )

  return (
    <Table
      className="exercises-table"
      rowKey={genExercisesTableRowId}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={false}
    />
  )
}
