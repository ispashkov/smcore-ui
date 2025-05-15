import * as React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import { genScheduleManagementPageParams } from '../schedule-management-page.utils'
import { SchedulePageQueryParams, SchedulePageUrlParams } from '../../schedule-page/schedule-page.types'

export function useScheduleManagementPageParams() {
  const { params } = useRouteMatch<SchedulePageUrlParams>()
  const { search } = useLocation<SchedulePageQueryParams>()

  return React.useMemo(() => genScheduleManagementPageParams(params, search), [params, search])
}
