import * as React from 'react'
import { useDispatch } from 'react-redux'

import { franchisesCreatePageActions } from '../../store/pages/franchises-create-page/franchises-create-page.slice'

export function useFranchisesCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(franchisesCreatePageActions.fetchAllCustomers())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(franchisesCreatePageActions.reset())
    }
  }, [dispatch])
}
