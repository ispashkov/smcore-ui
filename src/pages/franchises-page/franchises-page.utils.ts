import qs from 'qs'

import { NString, isString, isDef } from '../../types/lang.types'
import { FRANCHISES_PAGE_SIZE, FranchisesPageParams } from './franchises-page.types'

export function genFranchisesPageParams(search: NString): FranchisesPageParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : FRANCHISES_PAGE_SIZE

  return {
    size,
    page,
  }
}
