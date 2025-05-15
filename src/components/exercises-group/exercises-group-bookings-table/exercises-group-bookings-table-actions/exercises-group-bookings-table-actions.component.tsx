import * as React from 'react'
import { Button, Modal, Space } from 'antd'
import { CommentOutlined, ExclamationCircleOutlined, MinusOutlined } from '@ant-design/icons'

import { ExercisesGroupBookingsTableActionsEvents } from './exercises-group-bookings-table-actions.types'

interface Props extends ExercisesGroupBookingsTableActionsEvents {
  id: string
}

export const ExercisesGroupBookingsTableActions: React.FC<Props> = props => {
  const { id } = props
  const { onComment, onCancel } = props

  const onCommentHandler = React.useCallback(() => onComment(id), [id, onComment])

  const onCancelHandler = React.useCallback(() => {
    Modal.confirm({
      title: 'Отмена записи клиента',
      icon: <ExclamationCircleOutlined />,
      content: 'Вы уверены, что хотите отменить запись клиента?',
      cancelText: 'Нет',
      okText: 'Да',
      onOk: () => onCancel(id),
    })
  }, [id, onCancel])

  return (
    <Space size="middle">
      <Button icon={<CommentOutlined />} size="middle" onClick={onCommentHandler} />
      <Button icon={<MinusOutlined />} size="middle" onClick={onCancelHandler} danger />
    </Space>
  )
}
