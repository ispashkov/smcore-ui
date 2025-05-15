import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { genStudiosEditPagePath, genStudiosPagePath } from '../../../format/path.format'
import {
  genStudiosIsLoading,
  genStudiosTableRowList,
  genStudiosTotalElements,
} from '../../../store/pages/studios-page/studios-page.selectors'
import { useStudiosPageParams } from '../studios-page-hooks/studios-page-params.hook'
import { studiosPageActions } from '../../../store/pages/studios-page/studios-page.slice'

export function useStudiosPageTable() {
  const { push } = useHistory()

  const { page, size } = useStudiosPageParams()

  const dispatch = useDispatch()

  const studios = useSelector(genStudiosTableRowList)
  const totalElements = useSelector(genStudiosTotalElements)
  const isLoading = useSelector(genStudiosIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string): void => {
      push(genStudiosEditPagePath(id.toString()))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(studiosPageActions.removeStudio(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genStudiosPagePath({ page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genStudiosPagePath({ page, size: pageSize }))
    },
    [page, push]
  )

  return {
    studios,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
