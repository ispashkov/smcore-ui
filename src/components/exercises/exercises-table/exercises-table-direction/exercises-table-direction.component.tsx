import * as React from 'react'
import { Button, Typography } from 'antd'

import { EntityItem, isDef, Nullable } from '../../../../types/lang.types'
import { TableCellText } from '../../../table-cells/table-cell-text/table-cell-text.component'
import { ExercisesTableDirectionEvents } from './exercises-table-direction.types'
import './exercises-table-direction.styles.less'

interface Props extends ExercisesTableDirectionEvents {
  direction: Nullable<EntityItem<number>>
  studioRoom: EntityItem<string>
  timeFrom: string
  timeTo: string
  isBooked: boolean
  isCompleted: boolean
}

export const ExercisesTableDirection: React.FC<Props> = props => {
  const { direction, studioRoom, timeFrom, timeTo } = props
  const { isBooked, isCompleted } = props
  const { onAdd } = props

  const onAddHandler = React.useCallback((): void => {
    onAdd(studioRoom.id, timeFrom, timeTo)
  }, [onAdd, studioRoom.id, timeFrom, timeTo])

  if (isBooked && isDef(direction)) {
    return (
      <Typography.Paragraph className="exercises-table-direction" ellipsis={{ rows: 1 }}>
        <TableCellText text={direction.title} />
      </Typography.Paragraph>
    )
  }

  if (!isCompleted) {
    return (
      <Button type="primary" onClick={onAddHandler}>
        Добавить тренировку
      </Button>
    )
  }

  return null
}
