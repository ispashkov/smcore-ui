import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clientsPageActions } from '../../store/pages/clients-page/clients-page.slice'
import { getClientsIsLoaded, getClientsIsLoading } from '../../store/pages/clients-page/clients-page.selectors'
import { useClientsPageParams } from './clients-page-hooks/clients-page-params.hook'

export function useClientsPage() {
  const params = useClientsPageParams()

  const dispatch = useDispatch()

  const isLoading = useSelector(getClientsIsLoading)
  const isLoaded = useSelector(getClientsIsLoaded)

  React.useEffect(() => {
    dispatch(clientsPageActions.fetchAllClients(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(clientsPageActions.reset())
    }
  }, [dispatch])

  return {
    isLoading,
    isLoaded,
  }
}
