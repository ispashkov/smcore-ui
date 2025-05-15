import { useLocation } from 'react-router-dom'

import { DirectionsPageParams } from '../directions-page.types'
import { genDirectionsPageParams } from '../directions-page.utils'

export function useDirectionsPageParams(): DirectionsPageParams {
  const { search } = useLocation()

  return genDirectionsPageParams(search)
}
