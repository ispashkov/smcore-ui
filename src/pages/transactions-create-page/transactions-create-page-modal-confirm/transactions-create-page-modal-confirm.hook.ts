import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { genTransactionsPagePath } from '../../../format/path.format'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { transactionsCreatePageModalConfirmActions } from '../../../store/pages/transactions-create-page/transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.slice'
import {
  getTransactionsCreatePageModalConfirmIsLoading,
  getTransactionsCreatePageModalConfirmIsPaid,
} from '../../../store/pages/transactions-create-page/transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.selectors'

type UseTransactionsCreatePageModalConfirmProps = {
  transactionId: string
  studioId: string
}

export function useTransactionsCreatePageModalConfirm(props: UseTransactionsCreatePageModalConfirmProps) {
  const { transactionId, studioId } = props

  const { push } = useHistory()
  const dispatch = useDispatch()

  const isLoading = useSelector(getTransactionsCreatePageModalConfirmIsLoading)
  const isPaid = useSelector(getTransactionsCreatePageModalConfirmIsPaid)

  React.useEffect(() => {
    return () => {
      dispatch(transactionsCreatePageModalConfirmActions.reset())
    }
  }, [dispatch])

  const onSubmitHandler = React.useCallback((): void => {
    dispatch(
      transactionsCreatePageModalConfirmActions.payTransaction({
        transactionId,
        studioId,
      })
    )
  }, [dispatch, studioId, transactionId])

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())

    if (isPaid) {
      push(genTransactionsPagePath(studioId))
    }
  }, [dispatch, isPaid, push, studioId])

  return {
    isLoading,
    isPaid,
    onCancelHandler,
    onSubmitHandler,
  }
}
