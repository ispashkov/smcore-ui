import qs from 'qs'
import moment from 'moment'

import { NString, isString, isDef, parseBoolean } from '../../types/lang.types'
import { SchedulePageParams, SchedulePageQueryParams, SchedulePageUrlParams } from './schedule-page.types'

export function genSchedulePageParams(params: SchedulePageUrlParams, search: NString): SchedulePageParams {
  return {
    ...params,
    ...genSchedulePageQueryParams(search),
  }
}

function genSchedulePageQueryParams(search: NString): SchedulePageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const roomId = isString(queryParams?.roomId) ? queryParams?.roomId : null

  const date = isString(queryParams?.date) ? queryParams?.date : moment().format('YYYY-MM-DD')

  const completed = parseBoolean(queryParams?.completed) || null
  const extended = parseBoolean(queryParams?.extended) || null

  return {
    roomId,
    date,
    completed,
    extended,
  }
}
