import * as React from 'react'

import { ExercisesGroupActions } from '../../../components/exercises-group/exercises-group-actions/exercises-group-actions.component'
import { useScheduleGroupPageActions } from './schedule-group-page-actions.hook'
import './schedule-group-page-actions.styles.less'

export const ScheduleGroupPageActions: React.FC = () => {
  const { clientsInWaitList, onBookingHandler, onWaitingListHandler } = useScheduleGroupPageActions()

  return (
    <ExercisesGroupActions
      className="schedule-group-page-actions"
      clientsInWaitList={clientsInWaitList}
      onBooking={onBookingHandler}
      onWaitingList={onWaitingListHandler}
    />
  )
}
