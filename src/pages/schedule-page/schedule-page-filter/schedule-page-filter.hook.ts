import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { genSchedulePagePath } from '../../../format/path.format'
import { genSchedulePageListStudiosRoomsTags } from '../../../store/pages/schedule-page/schedule-page-list/schedule-page-list.selectors'
import { useSchedulePageParams } from '../schedule-page-hooks/schedule-page-params.hook'

export function useSchedulePageFilter() {
  const { push } = useHistory()
  const { studioId, ...params } = useSchedulePageParams()

  const { extended, roomId } = params

  const studiosRoomsTags = useSelector(genSchedulePageListStudiosRoomsTags)

  const onToggleModeHandler = React.useCallback((): void => {
    push(genSchedulePagePath(studioId, { ...params, extended: extended ? null : !extended }))
  }, [extended, params, push, studioId])

  const onSelectRoomHandler = React.useCallback(
    (roomId: string): void => {
      push(genSchedulePagePath(studioId, { ...params, roomId }))
    },
    [params, push, studioId]
  )

  const onResetRoomHandler = React.useCallback(() => {
    push(genSchedulePagePath(studioId, { ...params, roomId: null }))
  }, [params, push, studioId])

  return {
    extended: extended || false,
    onToggleModeHandler,

    studiosRoomsTags,
    roomId,
    onSelectRoomHandler,
    onResetRoomHandler,
  }
}
