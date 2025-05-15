import qs from 'qs'

import { NString, isString, isDef, isNumber } from '../../types/lang.types'
import { STUDIOS_PAGE_SIZE, StudiosPageParams } from './studios-page.types'

export function genStudiosPageParams(search: NString): StudiosPageParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null
  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : STUDIOS_PAGE_SIZE
  const city = isString(queryParams?.city) ? String(queryParams?.city) : null
  const country = isString(queryParams?.country) ? String(queryParams?.country) : null
  const directions = isNumber(queryParams?.direction) ? queryParams?.direction : null
  const orgId = isString(queryParams?.orgId) ? String(queryParams?.orgId) : null
  return {
    size,
    page,
    city,
    country,
    directions,
    orgId,
  }
}
