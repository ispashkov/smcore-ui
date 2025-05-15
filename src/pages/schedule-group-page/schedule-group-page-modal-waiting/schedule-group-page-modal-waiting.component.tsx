import * as React from 'react'

import { ExercisesGroupWaitingClientsModal } from '../../../components/exercises-group/exercises-group-waiting-clients-modal/exercises-group-waiting-clients-modal.component'
import { useScheduleGroupPageModalWaiting } from './schedule-group-page-modal-waiting.hook'
import { ScheduleGroupPageModalWaitingProps } from './schedule-group-page-modal-waiting.types'

export const ScheduleGroupPageModalWaiting: React.FC<ScheduleGroupPageModalWaitingProps> = props => {
  const { exerciseId } = props

  const { waitingList, loading, onSearchHandler, onBookHandler, onCancelHandler } = useScheduleGroupPageModalWaiting({
    exerciseId,
  })

  return (
    <ExercisesGroupWaitingClientsModal
      clients={waitingList}
      loading={loading}
      onSearch={onSearchHandler}
      onBook={onBookHandler}
      onCancel={onCancelHandler}
    />
  )
}
