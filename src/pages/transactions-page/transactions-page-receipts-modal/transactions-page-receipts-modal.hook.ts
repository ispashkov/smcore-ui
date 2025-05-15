import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../store/app.store'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { getTransactionPageReceiptsByTransactionId } from '../../../store/pages/transactions-page/transactions-page.selectors'

export function useTransactionsPageReceiptsModal(transactionId: string) {
  const dispatch = useDispatch()

  const receipts = useSelector((state: AppState) => getTransactionPageReceiptsByTransactionId(state, transactionId))

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    receipts,
    onCancelHandler,
  }
}
