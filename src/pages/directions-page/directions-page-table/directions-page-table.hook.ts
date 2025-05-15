import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { genDirectionsEditPagePath, genDirectionsPagePath } from '../../../format/path.format'
import {
  genDirectionsIsLoading,
  genDirectionsTableRowList,
  genDirectionsTotalElements,
} from '../../../store/pages/directions-page/directions-page.selectors'
import { directionsPageActions } from '../../../store/pages/directions-page/directions-page.slice'
import { useDirectionsPageParams } from '../directions-page-hooks/directions-page-params.hook'

export function useDirectionsPageTable() {
  const { push } = useHistory()

  const { page, size } = useDirectionsPageParams()

  const dispatch = useDispatch()

  const directions = useSelector(genDirectionsTableRowList)
  const totalElements = useSelector(genDirectionsTotalElements)
  const isLoading = useSelector(genDirectionsIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: number): void => {
      push(genDirectionsEditPagePath({ id: id.toString() }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: number): void => {
      dispatch(directionsPageActions.removeDirection(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genDirectionsPagePath({ page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genDirectionsPagePath({ page, size: pageSize }))
    },
    [page, push]
  )

  return {
    directions,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
