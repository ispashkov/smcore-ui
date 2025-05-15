import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isDef } from '../../types/lang.types'
import { employeesEditPageActions } from '../../store/pages/employees-edit-page/employees-edit-page.slice'
import {
  getEmployeesEditPageIsLoaded,
  getEmployeesEditPageIsLoading,
} from '../../store/pages/employees-edit-page/employees-edit-page.selectors'
import { useEmployeesEditPageParams } from './employees-edit-page-hooks/employees-edit-page-params.hook'

export function useEmployeesEditPage() {
  const { id } = useEmployeesEditPageParams()

  const dispatch = useDispatch()

  const isLoading = useSelector(getEmployeesEditPageIsLoading)
  const isLoaded = useSelector(getEmployeesEditPageIsLoaded)

  React.useEffect(() => {
    if (isDef(id)) {
      dispatch(employeesEditPageActions.fetchPageData(id))
    }
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(employeesEditPageActions.reset())
    }
  }, [dispatch])

  return {
    isLoaded,
    isLoading,
  }
}
