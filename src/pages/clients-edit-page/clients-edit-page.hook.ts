import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clientsEditPageCommonActions } from '../../store/pages/clients-edit-page/clients-edit-page-common/clients-edit-page-common.slice'
import {
  getClientsEditPageCommonIsLoaded,
  getClientsEditPageCommonIsLoading,
} from '../../store/pages/clients-edit-page/clients-edit-page-common/clients-edit-page-common.selectors'
import { useClientsEditPageParams } from './clients-edit-page-hooks/clients-edit-page-params.hook'

export function useClientsEditPage() {
  const { id, section } = useClientsEditPageParams()

  const dispatch = useDispatch()

  const isLoaded = useSelector(getClientsEditPageCommonIsLoaded)
  const isLoading = useSelector(getClientsEditPageCommonIsLoading)

  React.useEffect(() => {
    dispatch(clientsEditPageCommonActions.fetchClient(id))
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPageCommonActions.reset())
    }
  }, [dispatch])

  return {
    isLoading,
    isLoaded,
    section,
  }
}
