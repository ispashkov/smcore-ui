import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ModalConfirm } from '../../../components/modals/modal-confirm/modal-confirm.component'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { genSchedulePageListIsCanceling } from '../../../store/pages/schedule-page/schedule-page-list/schedule-page-list.selectors'
import { schedulePageListActions } from '../../../store/pages/schedule-page/schedule-page-list/schedule-page-list.slice'
import { SchedulePageModalConfirmProps } from './schedule-page-modal-confirm.types'

export const SchedulePageModalConfirm: React.FC<SchedulePageModalConfirmProps> = props => {
  const { id } = props

  const dispatch = useDispatch()

  const isCanceling = useSelector(genSchedulePageListIsCanceling)

  const onSubmitHandler = React.useCallback((): void => {
    dispatch(schedulePageListActions.cancelExercise(id))
  }, [dispatch, id])

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return (
    <ModalConfirm
      type="warning"
      title="Отмена занятия"
      description="Вы уверены, что хотите отменить занятие?"
      loading={isCanceling}
      onSubmit={onSubmitHandler}
      onCancel={onCancelHandler}
    />
  )
}
