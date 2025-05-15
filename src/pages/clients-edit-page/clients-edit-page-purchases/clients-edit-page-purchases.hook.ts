import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppModal } from '../../../types/modal.types'
import { genClientsEditPagePath } from '../../../format/path.format'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { clientsEditPagePurchasesActions } from '../../../store/pages/clients-edit-page/clients-edit-page-purchases/clients-edit-page-purchases.slice'
import {
  getClientsEditPagePurchasesIsLoaded,
  getClientsEditPagePurchasesIsLoading,
  getClientsEditPagePurchasesTableDataItems,
  getClientsEditPagePurchasesTotalElements,
} from '../../../store/pages/clients-edit-page/clients-edit-page-purchases/clients-edit-page-purchases.selectors'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'

export function useClientsEditPagePurchases() {
  const { id, section, page, size } = useClientsEditPageParams()

  const { push } = useHistory()
  const dispatch = useDispatch()

  const data = useSelector(getClientsEditPagePurchasesTableDataItems)
  const totalElements = useSelector(getClientsEditPagePurchasesTotalElements)

  const isLoading = useSelector(getClientsEditPagePurchasesIsLoading)
  const isLoaded = useSelector(getClientsEditPagePurchasesIsLoaded)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  React.useEffect((): void => {
    dispatch(
      clientsEditPagePurchasesActions.fetchTransactions({
        clientId: id,
        page,
        size,
      })
    )
  }, [dispatch, id, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPagePurchasesActions.reset())
    }
  }, [dispatch])

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genClientsEditPagePath({ id, section }, { page, size: pageSize }))
    },
    [id, push, section]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genClientsEditPagePath({ id, section }, { size: pageSize }))
    },
    [id, push, section]
  )

  const onBarcodeHandler = React.useCallback(
    (transactionId: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.CLIENTS_EDIT_PAGE_PURCHASES_RECEIPTS_MODAL,
          props: { transactionId },
        })
      )
    },
    [dispatch]
  )

  return {
    data,
    pagination,

    isLoading,
    isLoaded,

    onChangePageHandler,
    onChangePageSizeHandler,

    onBarcodeHandler,
  }
}
