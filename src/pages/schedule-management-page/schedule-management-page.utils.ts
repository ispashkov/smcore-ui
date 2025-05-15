import qs from 'qs'

import { isDef, isString, NString } from '../../types/lang.types'
import {
  ScheduleManagementPageParams,
  ScheduleManagementPageQueryParams,
  ScheduleManagementPageUrlParams,
} from './schedule-management-page.types'

export function genScheduleManagementPageParams(
  params: ScheduleManagementPageUrlParams,
  search: NString
): ScheduleManagementPageParams {
  return {
    ...params,
    ...genSchedulePageQueryParams(search),
  }
}

function genSchedulePageQueryParams(search: NString): ScheduleManagementPageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const roomId = isString(queryParams?.roomId) ? queryParams?.roomId : null

  return {
    roomId,
  }
}
