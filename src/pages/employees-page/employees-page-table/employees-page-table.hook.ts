import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { genEmployeesEditPagePath, genEmployeesPagePath } from '../../../format/path.format'
import {
  genEmployeesIsLoading,
  genEmployeesTableRowList,
  genEmployeesTotalElements,
} from '../../../store/pages/employees-page/employees-page.selectors'
import { employeesPageActions } from '../../../store/pages/employees-page/employees-page.slice'
import { useEmployeesPageParams } from '../employees-page-hooks/employees-page-params.hook'

export function useEmployeesPageTable() {
  const { push } = useHistory()

  const { page, size } = useEmployeesPageParams()

  const dispatch = useDispatch()

  const employees = useSelector(genEmployeesTableRowList)
  const totalElements = useSelector(genEmployeesTotalElements)
  const isLoading = useSelector(genEmployeesIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string): void => {
      push(genEmployeesEditPagePath({ id: id.toString() }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(employeesPageActions.removeEmployee(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genEmployeesPagePath({ page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genEmployeesPagePath({ page, size: pageSize }))
    },
    [page, push]
  )

  return {
    employees,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
