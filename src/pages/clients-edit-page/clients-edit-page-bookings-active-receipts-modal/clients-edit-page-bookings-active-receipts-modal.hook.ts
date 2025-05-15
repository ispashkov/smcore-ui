import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../store/app.store'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { getClientsEditPageBookingsActiveReceiptsById } from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-active/clients-edit-page-bookings-active.selectors'

export function useClientsEditPageBookingsActiveReceiptsModal(bookingId: string) {
  const dispatch = useDispatch()

  const receipts = useSelector((state: AppState) => getClientsEditPageBookingsActiveReceiptsById(state, bookingId))

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    receipts,
    onCancelHandler,
  }
}
