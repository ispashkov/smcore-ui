import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { genScheduleGroupPageExercise } from '../../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.selectors'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { useStudio } from '../../../hooks/use-studios.hook'
import { AppModal } from '../../../types/modal.types'
import { isDef } from '../../../types/lang.types'
import { useScheduleGroupPageParams } from '../schedule-group-page-hooks/schedule-group-page-params.hook'

export function useScheduleGroupPageHeader() {
  const dispatch = useDispatch()

  const { studioOffset } = useStudio()
  const { scheduleId } = useScheduleGroupPageParams()

  const schedule = useSelector(genScheduleGroupPageExercise)

  const onEditHandler = React.useCallback(() => {
    if (isDef(schedule) && isDef(studioOffset)) {
      const { studiosRoom } = schedule
      const { id: studioRoomId } = studiosRoom

      dispatch(
        modalActions.show({
          modal: AppModal.SCHEDULE_GROUP_PAGE_MODAL_EDIT,
          props: { scheduleId, studioRoomId, studioOffset },
        })
      )
    }
  }, [dispatch, schedule, scheduleId, studioOffset])

  return {
    schedule,
    onEditHandler,
  }
}
