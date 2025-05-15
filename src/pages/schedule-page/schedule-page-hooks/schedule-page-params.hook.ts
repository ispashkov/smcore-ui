import * as React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import { genSchedulePageParams } from '../schedule-page.utils'
import { SchedulePageParams, SchedulePageQueryParams, SchedulePageUrlParams } from '../schedule-page.types'

export function useSchedulePageParams(): SchedulePageParams {
  const { params } = useRouteMatch<SchedulePageUrlParams>()
  const { search } = useLocation<SchedulePageQueryParams>()

  return React.useMemo(() => genSchedulePageParams(params, search), [params, search])
}
