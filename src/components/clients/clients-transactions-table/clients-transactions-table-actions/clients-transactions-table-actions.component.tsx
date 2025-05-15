import * as React from 'react'
import { Button } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'

import { ClientsTransactionsTableActionsEvents } from './clients-transactions-table-actions.types'

interface Props extends ClientsTransactionsTableActionsEvents {
  transactionId: string
}

export const ClientsTransactionsTableActions: React.FC<Props> = props => {
  const { transactionId } = props
  const { onBarcode } = props

  const onBarcodeHandler = React.useCallback((): void => {
    onBarcode(transactionId)
  }, [onBarcode, transactionId])

  return <Button icon={<BarcodeOutlined />} size="middle" onClick={onBarcodeHandler} />
}
