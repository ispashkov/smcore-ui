import * as React from 'react'
import { useDispatch } from 'react-redux'

import { clientsCreatePageActions } from '../../store/pages/clients-create-page/clients-create-page.slice'

export function useClientsCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(clientsCreatePageActions.fetchAllCategories())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(clientsCreatePageActions.reset())
    }
  }, [dispatch])
}
