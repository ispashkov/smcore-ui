import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { transactionsPageActions } from '../../store/pages/transactions-page/transactions-page.slice'
import {
  getTransactionsPageIsLoaded,
  getTransactionsPageIsLoading,
} from '../../store/pages/transactions-page/transactions-page.selectors'
import { useTransactionsPageParams } from './transactions-page-hooks/transactions-page-params.hook'

export function useTransactionsPage() {
  const dispatch = useDispatch()

  const params = useTransactionsPageParams()

  const isLoaded = useSelector(getTransactionsPageIsLoaded)
  const isLoading = useSelector(getTransactionsPageIsLoading)

  React.useEffect((): void => {
    dispatch(transactionsPageActions.fetchAllTransactions(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(transactionsPageActions.reset())
    }
  }, [dispatch])

  return {
    isLoaded,
    isLoading,
  }
}
