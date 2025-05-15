import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'
import { EmployeesTableActions } from '../employees-table.types'

const { confirm } = Modal

interface Props extends EmployeesTableActions {
  id: string
  firstName: string
  lastName: string
}

export const EmployeesTableColumnActions: React.FC<Props> = props => {
  const { id, firstName, lastName } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    const name = `${lastName} ${firstName}`

    confirm({
      title: `Подтвердите удаление сотрудника ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить сотрудника: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [firstName, id, lastName, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
