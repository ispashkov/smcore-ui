import { useLocation } from 'react-router-dom'

import { StudiosPageParams } from '../studios-page.types'
import { genStudiosPageParams } from '../studios-page.utils'

export function useStudiosPageParams(): StudiosPageParams {
  const { search } = useLocation()

  return genStudiosPageParams(search)
}
