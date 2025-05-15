import * as React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import { genTransactionsPageParams } from '../transactions-page.utils'
import {
  TransactionsPageParams,
  TransactionsPageQueryParams,
  TransactionsPageUrlParams,
} from '../transactions-page.types'

export function useTransactionsPageParams(): TransactionsPageParams {
  const { params } = useRouteMatch<TransactionsPageUrlParams>()
  const { search } = useLocation<TransactionsPageQueryParams>()

  return React.useMemo(() => genTransactionsPageParams(params, search), [params, search])
}
