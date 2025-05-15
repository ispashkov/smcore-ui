import * as React from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'

import { genClientsEditPageParams } from '../clients-edit-page.utils'
import { ClientsEditPageParams, ClientsEditPageUrlParams } from '../clients-edit-page.types'

export function useClientsEditPageParams(): ClientsEditPageParams {
  const match = useRouteMatch<ClientsEditPageUrlParams>()
  const { search } = useLocation()
  const { params } = match

  return React.useMemo(() => genClientsEditPageParams(params, search), [params, search])
}
