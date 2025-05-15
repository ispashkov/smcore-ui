import { useRouteMatch } from 'react-router-dom'

import { FranchisesEditPageParams } from '../../franchises-edit-page/franchises-edit-page.types'

export function useStudioEditPageParams() {
  const match = useRouteMatch<FranchisesEditPageParams>()
  const { params } = match
  const { id } = params

  return {
    id,
  }
}
