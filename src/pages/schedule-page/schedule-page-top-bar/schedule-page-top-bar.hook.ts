import * as React from 'react'
import { useHistory } from 'react-router-dom'
import moment, { Moment } from 'moment'

import { genSchedulePagePath } from '../../../format/path.format'
import { formatMomentToDate } from '../../../format/date.format'
import { isDef } from '../../../types/lang.types'
import { useSchedulePageParams } from '../schedule-page-hooks/schedule-page-params.hook'

export function useSchedulePageTopBar() {
  const { push } = useHistory()

  const { studioId, ...params } = useSchedulePageParams()
  const { completed, date } = params

  const onToggleCompletedHandler = React.useCallback((): void => {
    const { completed } = params

    push(genSchedulePagePath(studioId, { ...params, completed: completed ? null : !completed }))
  }, [params, push, studioId])

  const onYesterdayHandler = React.useCallback((): void => {
    const yesterday = moment().subtract(1, 'days')
    const date = formatMomentToDate(yesterday)

    push(genSchedulePagePath(studioId, { ...params, date }))
  }, [params, push, studioId])

  const onTodayHandler = React.useCallback((): void => {
    const date = formatMomentToDate(moment())

    push(genSchedulePagePath(studioId, { ...params, date }))
  }, [params, push, studioId])

  const onChangeDateHandler = React.useCallback(
    (value: Moment | null): void => {
      const date = isDef(value) ? formatMomentToDate(value) : null

      push(genSchedulePagePath(studioId, { ...params, date }))
    },
    [params, push, studioId]
  )

  return {
    studioId,

    completed: completed || false,
    onToggleCompletedHandler,

    date,
    onYesterdayHandler,
    onTodayHandler,
    onChangeDateHandler,
  }
}
