import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { StudiosTableActions } from '../studios-table.types'
import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'

const { confirm } = Modal

interface Props extends StudiosTableActions {
  id: string
  name: string
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}

export const StudiosTableColumnActions: React.FC<Props> = props => {
  const { id, name } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    confirm({
      title: `Подтвердите удаление студии ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить студии: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
