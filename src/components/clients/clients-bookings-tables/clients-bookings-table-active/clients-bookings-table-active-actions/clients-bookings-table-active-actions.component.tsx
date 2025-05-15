import * as React from 'react'
import { Button, Modal, Space } from 'antd'
import { BarcodeOutlined, CloseOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import { ClientsBookingsTableActiveActionsEvents } from './clients-bookings-table-active-actions.types'

interface Props extends ClientsBookingsTableActiveActionsEvents {
  bookingId: string
  exerciseId: string
}

export const ClientsBookingsTableActiveActions: React.FC<Props> = props => {
  const { bookingId, exerciseId } = props
  const { onBarcode, onCancel } = props

  const onBarcodeHandler = React.useCallback((): void => {
    onBarcode(bookingId, exerciseId)
  }, [bookingId, exerciseId, onBarcode])

  const onCancelHandler = React.useCallback((): void => {
    Modal.confirm({
      title: 'Отмена записи клиента',
      icon: <ExclamationCircleOutlined />,
      content: 'Вы уверены, что хотите отменить запись клиента?',
      cancelText: 'Нет',
      okText: 'Да',
      onOk: () => onCancel(bookingId, exerciseId),
    })
  }, [bookingId, exerciseId, onCancel])

  return (
    <Space size="middle">
      <Button icon={<BarcodeOutlined />} size="middle" onClick={onBarcodeHandler} />
      <Button icon={<CloseOutlined />} size="middle" onClick={onCancelHandler} danger />
    </Space>
  )
}
