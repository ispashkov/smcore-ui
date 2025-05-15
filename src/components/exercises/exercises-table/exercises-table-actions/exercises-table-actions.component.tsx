import * as React from 'react'
import { Button, Space } from 'antd'
import { CommentOutlined, InfoCircleOutlined, MinusOutlined } from '@ant-design/icons'

import { ExercisesTableActionsEvents } from './exercises-table-actions.types'

interface Props extends ExercisesTableActionsEvents {
  id: string
  isCompleted: boolean
}

const ExercisesTableActionsInternal: React.FC<Props> = props => {
  const { id, isCompleted } = props
  const { onComment, onView, onCancel } = props

  const onCommentHandler = React.useCallback(() => onComment(id), [id, onComment])

  const onEditHandler = React.useCallback(() => onView(id), [id, onView])

  const onCancelHandler = React.useCallback(() => onCancel(id), [id, onCancel])

  return (
    <Space size="middle">
      <Button icon={<CommentOutlined />} size="middle" onClick={onCommentHandler} />
      <Button icon={<InfoCircleOutlined />} size="middle" onClick={onEditHandler} />
      {!isCompleted && <Button icon={<MinusOutlined />} size="middle" onClick={onCancelHandler} danger />}
    </Space>
  )
}

export const ExercisesTableActions = React.memo(ExercisesTableActionsInternal)
