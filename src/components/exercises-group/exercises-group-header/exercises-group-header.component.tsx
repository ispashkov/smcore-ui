import * as React from 'react'
import { clsx } from 'clsx'
import { Button, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import { formatToUTCHours } from '../../../format/date.format'
import { EntityItem, isDefAndNotEmpty } from '../../../types/lang.types'
import './exercises-group-header.styles.less'

interface Props {
  className?: string
  timeFrom: string
  direction: EntityItem<number>
  studiosRoom: EntityItem<string>
  trainers: EntityItem<string>[]
  onEdit: () => void
}

export const ExercisesGroupHeader: React.FC<Props> = props => {
  const { className } = props
  const { timeFrom, direction, studiosRoom, trainers } = props
  const { onEdit } = props

  const title = `Группа в ${formatToUTCHours(timeFrom)}, ${direction.title}, ${studiosRoom.title}`

  return (
    <div className={clsx('exercises-group-header', className)}>
      <Typography.Title className="exercises-group-header__title" level={2}>
        {title}
      </Typography.Title>

      <Button className="exercises-group-header__edit" icon={<EditOutlined />} onClick={onEdit} size="small" ghost>
        Изменить
      </Button>

      {isDefAndNotEmpty(trainers) && (
        <Typography.Text className="exercises-group-header__trainers">
          {trainers.map(trainer => trainer.title).join(', ')}
        </Typography.Text>
      )}
    </div>
  )
}
