import { useRouteMatch } from 'react-router-dom'

import { EmployeesEditPageParams } from '../employees-edit-page.types'

export function useEmployeesEditPageParams() {
  const match = useRouteMatch<EmployeesEditPageParams>()
  const { params } = match
  const { id } = params

  return {
    id,
  }
}
