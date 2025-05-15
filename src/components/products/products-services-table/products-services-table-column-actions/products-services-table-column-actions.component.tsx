import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'
import { ProductsServicesTableActions } from '../products-services-table.types'

const { confirm } = Modal

interface Props extends ProductsServicesTableActions {
  id: string
  name: string
}

export const ProductsServicesTableColumnActions: React.FC<Props> = props => {
  const { id, name } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id), [id, onEdit])

  const onRemoveHandler = React.useCallback(() => {
    confirm({
      title: `Подтвердите удаление услуги ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить услугу: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
