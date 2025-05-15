import * as React from 'react'
import { Button } from 'antd'
import { MinusOutlined } from '@ant-design/icons'

import { TransactionsProductsTableActionsEvents } from './transactions-products-table-actions.types'

interface Props extends TransactionsProductsTableActionsEvents {
  productId: string
}

export const TransactionsProductsTableActions: React.FC<Props> = props => {
  const { productId, onRemove } = props

  const onRemoveHandler = React.useCallback((): void => {
    onRemove(productId)
  }, [onRemove, productId])

  return <Button icon={<MinusOutlined />} size="middle" danger onClick={onRemoveHandler} />
}
