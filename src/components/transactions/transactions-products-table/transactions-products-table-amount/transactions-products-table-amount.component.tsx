import * as React from 'react'
import { InputNumber } from 'antd'

import { TransactionsProductsTableAmountEvents } from './transactions-products-table-amount.types'

interface Props extends TransactionsProductsTableAmountEvents {
  productId: string
  value: number
}

export const TransactionsProductsTableAmount: React.FC<Props> = props => {
  const { productId, value, onChangeAmount } = props

  const onChangeHandler = React.useCallback(
    (value: number): void => {
      onChangeAmount(productId, value)
    },
    [onChangeAmount, productId]
  )

  return <InputNumber value={value} onChange={onChangeHandler} min={1} />
}
