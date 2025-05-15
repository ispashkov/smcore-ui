import { useRouteMatch } from 'react-router-dom'

import { FranchisesEditPageParams } from '../franchises-edit-page.types'

export function useFranchisesEditPageParams() {
  const match = useRouteMatch<FranchisesEditPageParams>()
  const { params } = match
  const { id } = params

  return {
    id,
  }
}
