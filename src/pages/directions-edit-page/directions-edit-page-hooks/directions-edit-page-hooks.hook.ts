import { useRouteMatch } from 'react-router-dom'

import { DirectionsEditPageParams } from '../directions-edit-page.types'

export function useDirectionsEditPageParams() {
  const match = useRouteMatch<DirectionsEditPageParams>()
  const { params } = match
  const { id } = params

  return {
    id: Number(id),
  }
}
