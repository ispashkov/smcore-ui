import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../store/app.store'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { getClientsEditPageBookingsHistoryReceiptsById } from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-history/clients-edit-page-bookings-history.selectors'

export function useClientsEditPageBookingsHistoryReceiptsModal(bookingId: string) {
  const dispatch = useDispatch()

  const receipts = useSelector((state: AppState) => getClientsEditPageBookingsHistoryReceiptsById(state, bookingId))

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    receipts,
    onCancelHandler,
  }
}
