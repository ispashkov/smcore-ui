import * as React from 'react'
import { useDispatch } from 'react-redux'

import { modalActions } from '../../../store/common/modal/modal.slice'
import { useStudio } from '../../../hooks/use-studios.hook'
import { AppModal } from '../../../types/modal.types'
import { isDef } from '../../../types/lang.types'

export function useScheduleManagementPageAdd() {
  const { studioId, studioOffset } = useStudio()

  const dispatch = useDispatch()

  const onAddHandler = React.useCallback((): void => {
    if (isDef(studioId) && isDef(studioOffset)) {
      dispatch(
        modalActions.show({
          modal: AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_CREATE,
          props: { studioId, studioOffset },
        })
      )
    }
  }, [dispatch, studioId, studioOffset])

  return {
    onAddHandler,
  }
}
