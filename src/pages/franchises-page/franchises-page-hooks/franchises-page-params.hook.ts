import { useLocation } from 'react-router-dom'

import { FranchisesPageParams } from '../franchises-page.types'
import { genFranchisesPageParams } from '../franchises-page.utils'

export function useFranchisesPageParams(): FranchisesPageParams {
  const { search } = useLocation()

  return genFranchisesPageParams(search)
}
