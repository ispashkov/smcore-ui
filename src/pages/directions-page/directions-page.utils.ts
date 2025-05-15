import qs from 'qs'

import { NString, isString, isDef } from '../../types/lang.types'
import { DIRECTIONS_PAGE_SIZE, DirectionsPageParams } from './directions-page.types'

export function genDirectionsPageParams(search: NString): DirectionsPageParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : DIRECTIONS_PAGE_SIZE

  return {
    size,
    page,
  }
}
