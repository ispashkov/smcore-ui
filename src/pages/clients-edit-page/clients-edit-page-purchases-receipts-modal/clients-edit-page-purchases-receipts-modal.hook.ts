import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../store/app.store'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { getClientsEditPageReceiptsByTransactionId } from '../../../store/pages/clients-edit-page/clients-edit-page-purchases/clients-edit-page-purchases.selectors'

export function useClientsEditPagePurchasesReceiptsModal(transactionId: string) {
  const dispatch = useDispatch()

  const receipts = useSelector((state: AppState) => getClientsEditPageReceiptsByTransactionId(state, transactionId))

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    receipts,
    onCancelHandler,
  }
}
