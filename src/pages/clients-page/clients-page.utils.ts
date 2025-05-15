import qs from 'qs'

import { NString, isString, isDef } from '../../types/lang.types'
import { ClientsPageParams, CLIENTS_PAGE_SIZE } from './clients-page.types'

export function genClientsPageParams(search: NString): ClientsPageParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : CLIENTS_PAGE_SIZE

  return {
    size,
    page,
  }
}
