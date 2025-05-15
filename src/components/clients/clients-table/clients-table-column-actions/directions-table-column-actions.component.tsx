import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { ClientsTableActions } from '../clients-table.types'
import { NString } from '../../../../types/lang.types'
import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'

const { confirm } = Modal

interface Props extends ClientsTableActions {
  id: string
  name: NString
}

export const ClientsTableColumnActions: React.FC<Props> = props => {
  const { id, name } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    confirm({
      title: `Подтвердите удаление клиента ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить клинта: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
