import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genClientsEditPagePath } from '../../../format/path.format'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { AppModal } from '../../../types/modal.types'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { clientsEditPageSubscriptionsActions } from '../../../store/pages/clients-edit-page/clients-edit-page-subscriptions/clients-edit-page-subscriptions.slice'
import {
  getClientsEditPageSubscriptionsIsLoaded,
  getClientsEditPageSubscriptionsIsLoading,
  getClientsEditPageSubscriptionsTableDataItems,
  getClientsEditPageSubscriptionsTotalElements,
} from '../../../store/pages/clients-edit-page/clients-edit-page-subscriptions/clients-edit-page-subscriptions.selectors'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'

export function useClientsEditPageSubscriptions() {
  const { id, section, page, size } = useClientsEditPageParams()

  const { push } = useHistory()
  const dispatch = useDispatch()

  const data = useSelector(getClientsEditPageSubscriptionsTableDataItems)
  const totalElements = useSelector(getClientsEditPageSubscriptionsTotalElements)

  const isLoading = useSelector(getClientsEditPageSubscriptionsIsLoading)
  const isLoaded = useSelector(getClientsEditPageSubscriptionsIsLoaded)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  React.useEffect(() => {
    dispatch(
      clientsEditPageSubscriptionsActions.fetchClientsSubscriptions({
        clientId: id,
        page,
        size,
      })
    )
  }, [dispatch, id, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPageSubscriptionsActions.reset())
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
    (subscriptionId: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_RECEIPTS_MODAL,
          props: { clientId: id, subscriptionId },
        })
      )
    },
    [dispatch, id]
  )

  const onPauseHandler = React.useCallback(
    (subscriptionId: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.CLIENTS_EDIT_PAGE_SUBSCRIPTIONS_PAUSE_MODAL,
          props: { clientId: id, subscriptionId },
        })
      )
    },
    [dispatch, id]
  )

  const onResumeHandler = React.useCallback(
    (subscriptionId: string): void => {
      dispatch(clientsEditPageSubscriptionsActions.resumeClientSubscription({ clientId: id, subscriptionId }))
    },
    [id, dispatch]
  )

  const onRefundHandler = React.useCallback(
    (subscriptionId: string): void => {
      dispatch(clientsEditPageSubscriptionsActions.refundClientSubscription({ clientId: id, subscriptionId }))
    },
    [dispatch, id]
  )

  return {
    data,
    pagination,

    isLoading,
    isLoaded,

    onChangePageHandler,
    onChangePageSizeHandler,

    onBarcodeHandler,
    onPauseHandler,
    onResumeHandler,
    onRefundHandler,
  }
}
