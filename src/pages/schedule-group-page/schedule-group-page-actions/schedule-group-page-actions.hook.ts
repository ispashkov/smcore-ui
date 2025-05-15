import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppModal } from '../../../types/modal.types'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { genScheduleGroupPageListClientsInWaitList } from '../../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.selectors'
import { useScheduleGroupPageParams } from '../schedule-group-page-hooks/schedule-group-page-params.hook'

export function useScheduleGroupPageActions() {
  const { scheduleId } = useScheduleGroupPageParams()

  const dispatch = useDispatch()

  const clientsInWaitList = useSelector(genScheduleGroupPageListClientsInWaitList)

  const onBookingHandler = React.useCallback(() => {
    dispatch(
      modalActions.show({
        modal: AppModal.SCHEDULE_GROUP_PAGE_MODAL_BOOKING,
        props: { scheduleId },
      })
    )
  }, [dispatch, scheduleId])

  const onWaitingListHandler = React.useCallback((): void => {
    dispatch(
      modalActions.show({
        modal: AppModal.SCHEDULE_GROUP_PAGE_MODAL_WAITING,
        props: { exerciseId: scheduleId },
      })
    )
  }, [dispatch, scheduleId])

  return {
    clientsInWaitList,

    onBookingHandler,
    onWaitingListHandler,
  }
}
