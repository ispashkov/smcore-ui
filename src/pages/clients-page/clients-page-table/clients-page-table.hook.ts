import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { genClientsEditPagePath, genClientsPagePath } from '../../../format/path.format'
import { useClientsPageParams } from '../clients-page-hooks/clients-page-params.hook'
import {
  getClientsIsLoading,
  getClientsTableRowList,
  getClientsTotalElements,
} from '../../../store/pages/clients-page/clients-page.selectors'
import { clientsPageActions } from '../../../store/pages/clients-page/clients-page.slice'

export function useClientsPageTable() {
  const { push } = useHistory()

  const { page, size } = useClientsPageParams()

  const dispatch = useDispatch()

  const clients = useSelector(getClientsTableRowList)
  const totalElements = useSelector(getClientsTotalElements)
  const isLoading = useSelector(getClientsIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onEditHandler = React.useCallback(
    (id: string): void => {
      push(genClientsEditPagePath({ id }))
    },
    [push]
  )

  const onRemoveHandler = React.useCallback(
    (id: string): void => {
      dispatch(clientsPageActions.removeClient(id))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genClientsPagePath({ page: page, size: pageSize }))
    },
    [push]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genClientsPagePath({ page, size: pageSize }))
    },
    [page, push]
  )

  return {
    clients,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
