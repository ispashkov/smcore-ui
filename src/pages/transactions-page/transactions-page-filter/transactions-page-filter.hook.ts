import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { genTransactionsCreatePagePath } from '../../../format/path.format'
import { useTransactionsPageParams } from '../transactions-page-hooks/transactions-page-params.hook'

export function useTransactionsPageFilter() {
  const { push } = useHistory()

  const { studioId } = useTransactionsPageParams()

  const onCreateHandler = React.useCallback((): void => {
    push(genTransactionsCreatePagePath(studioId))
  }, [push, studioId])

  return {
    onCreateHandler,
  }
}
