import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modalActions } from '../../../store/common/modal/modal.slice'
import { scheduleGroupPageModalWaitingActions } from '../../../store/pages/schedule-group-page/schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.slice'
import {
  getScheduleGroupPageModalWaitingIsLoading,
  getScheduleGroupPageModalWaitingList,
} from '../../../store/pages/schedule-group-page/schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.selectors'
import { ScheduleGroupPageModalWaitingProps } from './schedule-group-page-modal-waiting.types'

export function useScheduleGroupPageModalWaiting(props: ScheduleGroupPageModalWaitingProps) {
  const { exerciseId } = props

  const dispatch = useDispatch()

  const waitingList = useSelector(getScheduleGroupPageModalWaitingList)
  const loading = useSelector(getScheduleGroupPageModalWaitingIsLoading)

  React.useEffect((): void => {
    dispatch(
      scheduleGroupPageModalWaitingActions.fetchWaitingList({
        exerciseId,
      })
    )
  }, [dispatch, exerciseId])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleGroupPageModalWaitingActions.reset())
    }
  }, [dispatch])

  const onSearchHandler = React.useCallback(
    (value: string): void => {
      dispatch(
        scheduleGroupPageModalWaitingActions.fetchWaitingList({
          exerciseId,
          search: value,
        })
      )
    },
    [dispatch, exerciseId]
  )

  const onBookHandler = React.useCallback(
    (phone: string): void => {
      dispatch(
        scheduleGroupPageModalWaitingActions.bookClient({
          exerciseId,
          phone,
        })
      )
    },
    [dispatch, exerciseId]
  )

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    waitingList,
    loading,

    onSearchHandler,
    onBookHandler,
    onCancelHandler,
  }
}
