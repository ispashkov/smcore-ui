import { useLocation } from 'react-router-dom'

import { EmployeesPageParams } from '../employees-page.types'
import { genEmployeesPageParams } from '../employees-page.utils'

export function useEmployeesPageParams(): EmployeesPageParams {
  const { search } = useLocation()

  return genEmployeesPageParams(search)
}
