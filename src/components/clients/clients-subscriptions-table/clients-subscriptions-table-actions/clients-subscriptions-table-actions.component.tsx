import * as React from 'react'
import { Button, Modal, Space } from 'antd'
import {
  BarcodeOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  PauseOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons'

import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'
import { ClientsSubscriptionsTableActionsEvents } from './clients-subscriptions-table-actions.types'

interface Props extends ClientsSubscriptionsTableActionsEvents {
  subscriptionId: string
  status: ClientSubscriptionStatus
}

export const ClientsSubscriptionsTableActions: React.FC<Props> = props => {
  const { subscriptionId, status } = props
  const { onBarcode, onPause, onResume, onRefund } = props

  const onBarcodeHandler = React.useCallback((): void => {
    onBarcode(subscriptionId)
  }, [subscriptionId, onBarcode])

  const onPauseHandler = React.useCallback((): void => {
    onPause(subscriptionId)
  }, [subscriptionId, onPause])

  const onResumeHandler = React.useCallback((): void => {
    onResume(subscriptionId)
  }, [subscriptionId, onResume])

  const onRefundHandler = React.useCallback(() => {
    Modal.confirm({
      title: 'Подтвердите удаление абонемента',
      icon: <ExclamationCircleOutlined />,
      content: 'Вы уверены что хотите удалить абонемент?',
      onOk: () => onRefund(subscriptionId),
    })
  }, [subscriptionId, onRefund])

  const isPaused = status === ClientSubscriptionStatus.HOLD
  const isRefunded = status === ClientSubscriptionStatus.REFUNDED

  return (
    <Space size="middle">
      <Button icon={<BarcodeOutlined />} size="middle" onClick={onBarcodeHandler} />

      {isPaused ? (
        <Button icon={<PlaySquareOutlined />} size="middle" onClick={onResumeHandler} />
      ) : (
        <Button icon={<PauseOutlined />} size="middle" onClick={onPauseHandler} />
      )}

      {!isRefunded && <Button icon={<CloseOutlined />} size="middle" onClick={onRefundHandler} danger />}
    </Space>
  )
}
