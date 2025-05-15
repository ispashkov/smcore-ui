import qs from 'qs'

import { isDef, isString, NString } from '../../types/lang.types'
import {
  TRANSACTIONS_PAGE_SIZE,
  TransactionsPageParams,
  TransactionsPageQueryParams,
  TransactionsPageUrlParams,
} from './transactions-page.types'

export function genTransactionsPageParams(params: TransactionsPageUrlParams, search: NString): TransactionsPageParams {
  return {
    ...params,
    ...genTransactionsPageQueryParams(search),
  }
}

function genTransactionsPageQueryParams(search: NString): TransactionsPageQueryParams {
  const queryParams = isDef(search) ? qs.parse(search, { ignoreQueryPrefix: true }) : null

  const page = isString(queryParams?.page) ? Number(queryParams?.page) : null
  const size = isString(queryParams?.size) ? Number(queryParams?.size) : TRANSACTIONS_PAGE_SIZE

  return {
    size,
    page,
  }
}
