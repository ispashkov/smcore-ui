import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { NString } from '../../../../types/lang.types'
import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'
import { DirectionsTableActions } from '../directions-table.types'

const { confirm } = Modal

interface Props extends DirectionsTableActions {
  id: number
  name: NString
  onEdit: (id: number) => void
  onRemove: (id: number) => void
}

export const DirectionsTableColumnActions: React.FC<Props> = props => {
  const { id, name } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    confirm({
      title: `Подтвердите удаление направления ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить направление: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
