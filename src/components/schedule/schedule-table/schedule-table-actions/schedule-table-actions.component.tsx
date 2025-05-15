import * as React from 'react'

import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'
import { ScheduleTableActionsEvents } from './schedule-table-actions.types'

interface Props extends ScheduleTableActionsEvents {
  id: string
}

export const ScheduleTableActions: React.FC<Props> = props => {
  const { id } = props
  const { onEdit, onCancel } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    onCancel(id)
  }, [id, onCancel])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
