import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genFranchisesEditPagePath, genFranchisesPagePath } from '../../../format/path.format'
import {
  genFranchisesIsLoading,
  genFranchisesTableRowList,
  genFranchisesTotalElements,
} from '../../../store/pages/franchises-page/franchises-page.selectors'
import { franchisesPageActions } from '../../../store/pages/franchises-page/franchises-page.slice'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { useFranchisesPageParams } from '../franchises-page-hooks/franchises-page-params.hook'

export function useFranchisesPageTable() {
  const { push } = useHistory()

  const { page, size } = useFranchisesPageParams()

  const dispatch = useDispatch()

  const franchises = useSelector(genFranchisesTableRowList)
  const totalElements = useSelector(genFranchisesTotalElements)
  const isLoading = useSelector(genFranchisesIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string): void => {
      push(genFranchisesEditPagePath({ id }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(franchisesPageActions.removeFranchise(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genFranchisesPagePath({ page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genFranchisesPagePath({ page, size: pageSize }))
    },
    [page, push]
  )

  return {
    franchises,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
