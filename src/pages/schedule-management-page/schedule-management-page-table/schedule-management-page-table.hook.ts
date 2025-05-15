import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useStudio } from '../../../hooks/use-studios.hook'
import {
  genScheduleManagementPageListIsLoading,
  genScheduleManagementPageListTableDataItems,
} from '../../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.selectors'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModal } from '../../../types/modal.types'
import { isDef } from '../../../types/lang.types'

export function useScheduleManagementPageTable() {
  const { studioId, studioOffset } = useStudio()

  const dispatch = useDispatch()

  const schedule = useSelector(genScheduleManagementPageListTableDataItems)
  const isLoading = useSelector(genScheduleManagementPageListIsLoading)

  const onEditHandler = React.useCallback(
    (id: string): void => {
      if (isDef(studioId) && isDef(studioOffset)) {
        dispatch(
          modalActions.show({
            modal: AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_EDIT,
            props: { id, studioId, studioOffset },
          })
        )
      }
    },
    [dispatch, studioId, studioOffset]
  )

  const onCancelHandler = React.useCallback(
    (id: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CONFIRM,
          props: { id },
        })
      )
    },
    [dispatch]
  )

  return {
    schedule,
    isLoading,
    onEditHandler,
    onCancelHandler,
  }
}
