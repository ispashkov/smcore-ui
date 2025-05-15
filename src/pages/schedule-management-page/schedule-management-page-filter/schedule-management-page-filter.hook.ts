import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { genScheduleManagementPagePath } from '../../../format/path.format'
import { genScheduleManagementPageListStudiosRoomsTags } from '../../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.selectors'
import { useScheduleManagementPageParams } from '../schedule-management-page-hooks/schedule-management-page-params.hook'

export function useScheduleManagementPageFilter() {
  const { push } = useHistory()

  const { studioId, ...params } = useScheduleManagementPageParams()
  const { roomId } = params

  const studiosRoomsTags = useSelector(genScheduleManagementPageListStudiosRoomsTags)

  const onSelectRoomHandler = React.useCallback(
    (roomId: string): void => {
      push(genScheduleManagementPagePath(studioId, { ...params, roomId }))
    },
    [params, push, studioId]
  )

  const onResetRoomHandler = React.useCallback(() => {
    push(genScheduleManagementPagePath(studioId, { ...params, roomId: null }))
  }, [params, push, studioId])

  return {
    roomId,
    studiosRoomsTags,
    onSelectRoomHandler,
    onResetRoomHandler,
  }
}
