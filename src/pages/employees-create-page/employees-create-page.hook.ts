import * as React from 'react'
import { useDispatch } from 'react-redux'

import { employeesCreatePageActions } from '../../store/pages/employees-create-page/employees-create-page.slice'

export function useEmployeesCreatePage() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(employeesCreatePageActions.fetchPageData())
  }, [dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(employeesCreatePageActions.reset())
    }
  }, [dispatch])
}
