import * as React from 'react'

import { isDef } from '../../../types/lang.types'
import { ExercisesGroupHeader } from '../../../components/exercises-group/exercises-group-header/exercises-group-header.component'
import { useScheduleGroupPageHeader } from './schedule-group-page-header.hook'
import './schedule-group-page-header.styles.less'

export const ScheduleGroupPageHeader: React.FC = () => {
  const { schedule, onEditHandler } = useScheduleGroupPageHeader()

  if (isDef(schedule)) {
    const { timeFrom, direction, studiosRoom, trainers } = schedule

    return (
      <ExercisesGroupHeader
        className="schedule-group-page-header"
        timeFrom={timeFrom}
        direction={direction}
        studiosRoom={studiosRoom}
        trainers={trainers}
        onEdit={onEditHandler}
      />
    )
  }

  return null
}
