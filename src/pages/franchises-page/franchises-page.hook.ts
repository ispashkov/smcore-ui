import * as React from 'react'
import { useDispatch } from 'react-redux'

import { franchisesPageActions } from '../../store/pages/franchises-page/franchises-page.slice'
import { useFranchisesPageParams } from './franchises-page-hooks/franchises-page-params.hook'

export function useFranchisesPage() {
  const params = useFranchisesPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(franchisesPageActions.fetchAllFranchises(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(franchisesPageActions.reset())
    }
  }, [dispatch])
}
