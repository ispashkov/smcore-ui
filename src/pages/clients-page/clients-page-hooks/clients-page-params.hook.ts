import * as React from 'react'
import { useLocation } from 'react-router-dom'

import { genClientsPageParams } from '../clients-page.utils'
import { ClientsPageParams } from '../clients-page.types'

export function useClientsPageParams(): ClientsPageParams {
  const { search } = useLocation()

  return React.useMemo(() => genClientsPageParams(search), [search])
}
