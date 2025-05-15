import * as React from 'react'
import { useDispatch } from 'react-redux'

import { employeesPageActions } from '../../store/pages/employees-page/employees-page.slice'
import { useEmployeesPageParams } from './employees-page-hooks/employees-page-params.hook'

export function useEmployeesPage() {
  const params = useEmployeesPageParams()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(employeesPageActions.fetchAllEmployees(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(employeesPageActions.reset())
    }
  }, [dispatch])
}
