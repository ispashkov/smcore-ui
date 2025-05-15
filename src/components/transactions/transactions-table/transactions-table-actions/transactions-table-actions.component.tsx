import * as React from 'react'
import { Button } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'

import { TransactionsTableDataItem } from '../transactions-table.types'
import { TransactionsTableActionsEvents } from './transactions-table-actions.types'

interface Props extends TransactionsTableActionsEvents {
  transaction: TransactionsTableDataItem
}

export const TransactionsTableActions: React.FC<Props> = props => {
  const { transaction } = props
  const { onBarcode } = props

  const onBarcodeHandler = React.useCallback((): void => {
    onBarcode(transaction)
  }, [onBarcode, transaction])

  return <Button icon={<BarcodeOutlined />} size="middle" onClick={onBarcodeHandler} />
}
