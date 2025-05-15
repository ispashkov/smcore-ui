import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../store/app.store'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { getClientsEditPageSubscriptionsReceiptsById } from '../../../store/pages/clients-edit-page/clients-edit-page-subscriptions/clients-edit-page-subscriptions.selectors'

export function useClientsEditPageSubscriptionsReceiptsModal(subscriptionId: string) {
  const dispatch = useDispatch()

  const receipts = useSelector((state: AppState) => getClientsEditPageSubscriptionsReceiptsById(state, subscriptionId))

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    receipts,
    onCancelHandler,
  }
}
