import qs from 'qs'

import { isDef, isString, NString } from '../../types/lang.types'
import {
  ScheduleGroupPageParams,
  ScheduleGroupPageUrlParams,
  ScheduleGroupPageQueryParams,
  SCHEDULE_GROUP_PAGE_SIZE,
} from './schedule-group-page.types'

export function genScheduleGroupPageParams(
  params: ScheduleGroupPageUrlParams,
  search: NString
): ScheduleGroupPageParams {
  return {
    ...params,
    ...genScheduleGroupPageQueryParams(search),
  }
}

function genScheduleGroupPageQueryParams(search: NString): ScheduleGroupPageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : SCHEDULE_GROUP_PAGE_SIZE

  const productCategoryId = isString(queryParams?.productCategoryId) ? queryParams?.productCategoryId : null

  return {
    page,
    size,
    productCategoryId,
  }
}
