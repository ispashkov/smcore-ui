import * as React from 'react'
import { Button, Space } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'

import { ClientsBookingsTableHistoryActionsEvents } from './clients-bookings-table-history-actions.types'

interface Props extends ClientsBookingsTableHistoryActionsEvents {
  bookingId: string
  exerciseId: string
}

export const ClientsBookingsTableHistoryActions: React.FC<Props> = props => {
  const { bookingId, exerciseId } = props
  const { onBarcode } = props

  const onBarcodeHandler = React.useCallback((): void => {
    onBarcode(bookingId, exerciseId)
  }, [bookingId, exerciseId, onBarcode])

  return (
    <Space size="middle">
      <Button icon={<BarcodeOutlined />} size="middle" onClick={onBarcodeHandler} />
    </Space>
  )
}
