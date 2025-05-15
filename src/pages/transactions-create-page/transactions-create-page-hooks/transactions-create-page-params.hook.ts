import { useRouteMatch } from 'react-router-dom'

import { TransactionsCreatePageParams } from '../transactions-create-page.types'

export function useTransactionsCreatePageParams() {
  const { params } = useRouteMatch<TransactionsCreatePageParams>()

  return params
}
