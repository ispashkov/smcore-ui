import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { genScheduleGroupPagePath } from '../../../format/path.format'
import { useStudio } from '../../../hooks/use-studios.hook'
import {
  genSchedulePageListIsLoading,
  genSchedulePageListTableRowList,
} from '../../../store/pages/schedule-page/schedule-page-list/schedule-page-list.selectors'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { isDef } from '../../../types/lang.types'
import { AppModal } from '../../../types/modal.types'
import { useSchedulePageParams } from '../schedule-page-hooks/schedule-page-params.hook'

export function useSchedulePageTable() {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const { studioId } = useSchedulePageParams()
  const { studioOffset } = useStudio()

  const schedule = useSelector(genSchedulePageListTableRowList)
  const isLoading = useSelector(genSchedulePageListIsLoading)

  const onAddHandler = React.useCallback(
    (studioRoomId: string): void => {
      if (isDef(studioOffset)) {
        dispatch(
          modalActions.show({
            modal: AppModal.SCHEDULE_PAGE_MODAL_CREATE,
            props: { studioId, studioOffset, studioRoomId },
          })
        )
      }
    },
    [dispatch, studioId, studioOffset]
  )

  const onCommentHandler = React.useCallback((scheduleId: string): void => {
    console.log(scheduleId)
  }, [])

  const onViewHandler = React.useCallback(
    (scheduleId: string): void => {
      push(genScheduleGroupPagePath(studioId, scheduleId))
    },
    [push, studioId]
  )

  const onCancelHandler = React.useCallback(
    (id: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.SCHEDULE_PAGE_MODAL_CONFIRM,
          props: { id },
        })
      )
    },
    [dispatch]
  )

  return {
    schedule,
    isLoading,
    onCommentHandler,
    onAddHandler,
    onViewHandler,
    onCancelHandler,
  }
}
