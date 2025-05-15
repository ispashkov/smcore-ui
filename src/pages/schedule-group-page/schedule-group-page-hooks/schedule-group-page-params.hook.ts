import * as React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import { ScheduleGroupPageQueryParams, ScheduleGroupPageUrlParams } from '../schedule-group-page.types'
import { genScheduleGroupPageParams } from '../schedule-group-page.utils'

export function useScheduleGroupPageParams() {
  const { params } = useRouteMatch<ScheduleGroupPageUrlParams>()
  const { search } = useLocation<ScheduleGroupPageQueryParams>()

  return React.useMemo(() => genScheduleGroupPageParams(params, search), [params, search])
}
