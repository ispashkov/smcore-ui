import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ModalConfirm } from '../../../components/modals/modal-confirm/modal-confirm.component'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { scheduleManagementPageListActions } from '../../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.slice'
import { genScheduleManagementPageListIsCanceling } from '../../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.selectors'
import { ScheduleManagementPageModalConfirmProps } from './schedule-management-page-modal-confirm.types'

export const ScheduleManagementPageModalConfirm: React.FC<ScheduleManagementPageModalConfirmProps> = props => {
  const { id } = props

  const dispatch = useDispatch()

  const isCanceling = useSelector(genScheduleManagementPageListIsCanceling)

  const onSubmitHandler = React.useCallback((): void => {
    dispatch(scheduleManagementPageListActions.cancelSchedule(id))
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
