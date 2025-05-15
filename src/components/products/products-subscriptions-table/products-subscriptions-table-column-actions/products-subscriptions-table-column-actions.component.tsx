import * as React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { TableCellActions } from '../../../table-cells/table-cell-actions/table-cell-actions.component'
import { ProductsSubscriptionsTableActions } from '../products-subscriptions-table.types'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'

const { confirm } = Modal

interface Props extends ProductsSubscriptionsTableActions {
  id: string
  name: string
  type: ProductsSubscriptionsApi.ProductSubscriptionType
}

export const ProductsSubscriptionsTableColumnActions: React.FC<Props> = props => {
  const { id, name, type } = props
  const { onEdit, onRemove } = props

  const onEditHandler = React.useCallback(() => onEdit(id, type), [id, onEdit, type])

  const onRemoveHandler = React.useCallback(() => {
    confirm({
      title: `Подтвердите удаление абонемента ${name}`,
      icon: <ExclamationCircleOutlined />,
      content: `Вы уверены что хотите удалить абонемент: ${name}`,
      onOk: () => onRemove(id),
    })
  }, [id, name, onRemove])

  return <TableCellActions onEdit={onEditHandler} onRemove={onRemoveHandler} />
}
