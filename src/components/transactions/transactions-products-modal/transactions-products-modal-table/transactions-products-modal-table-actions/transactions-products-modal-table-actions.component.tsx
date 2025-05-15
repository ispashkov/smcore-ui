import * as React from 'react'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { TransactionsProductsModalTableActionsEvents } from './transactions-products-modal-table-actions.types'

interface Props extends TransactionsProductsModalTableActionsEvents {
  productId: string
}

const TransactionsProductsModalTableActionsInternal: React.FC<Props> = props => {
  const { productId, onAdd } = props

  const onRemoveHandler = React.useCallback((): void => {
    onAdd(productId)
  }, [onAdd, productId])

  return (
    <Button type="primary" size="middle" icon={<PlusCircleOutlined />} onClick={onRemoveHandler}>
      Добавить товар
    </Button>
  )
}

export const TransactionsProductsModalTableActions = React.memo(TransactionsProductsModalTableActionsInternal)
