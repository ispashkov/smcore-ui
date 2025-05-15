import * as React from 'react'
import { useDispatch } from 'react-redux'

import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModal } from '../../../types/modal.types'

export function useTransactionsCreatePageAdd() {
  const dispatch = useDispatch()

  const onAddHandler = React.useCallback((): void => {
    dispatch(
      modalActions.show({
        modal: AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCTS,
      })
    )
  }, [dispatch])

  return {
    onAddHandler,
  }
}
