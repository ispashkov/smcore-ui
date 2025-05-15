import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genClientsEditPagePath } from '../../../format/path.format'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { clientsEditPageBookingsActiveActions } from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-active/clients-edit-page-bookings-active.slice'
import {
  getClientsEditPageBookingsActiveIsLoaded,
  getClientsEditPageBookingsActiveIsLoading,
  getClientsEditPageBookingsActiveTableDataItems,
  getClientsEditPageBookingsActiveTotalElements,
} from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-active/clients-edit-page-bookings-active.selectors'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModal } from '../../../types/modal.types'

export function useClientsEditPageBookingsActive() {
  const { id, section, page, size } = useClientsEditPageParams()

  const { push } = useHistory()
  const dispatch = useDispatch()

  const data = useSelector(getClientsEditPageBookingsActiveTableDataItems)
  const totalElements = useSelector(getClientsEditPageBookingsActiveTotalElements)

  const isLoading = useSelector(getClientsEditPageBookingsActiveIsLoading)
  const isLoaded = useSelector(getClientsEditPageBookingsActiveIsLoaded)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  React.useEffect((): void => {
    dispatch(
      clientsEditPageBookingsActiveActions.fetchBookings({
        clientId: id,
        page,
        size,
      })
    )
  }, [dispatch, id, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPageBookingsActiveActions.reset())
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

  const onVisitHandler = React.useCallback(
    (bookingId: string, exerciseId: string, checked: boolean): void => {
      dispatch(
        clientsEditPageBookingsActiveActions.changeBookingVisitingConfirmation({
          bookingId,
          exerciseId,
          confirm: checked,
        })
      )
    },
    [dispatch]
  )

  const onBarcodeHandler = React.useCallback(
    (bookingId: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_ACTIVE_RECEIPTS_MODAL,
          props: { bookingId: bookingId },
        })
      )
    },
    [dispatch]
  )

  const onCancelHandler = React.useCallback(
    (bookingId: string, exerciseId: string): void => {
      dispatch(
        clientsEditPageBookingsActiveActions.cancelBooking({
          bookingId,
          exerciseId,
          /**
           * @todo Should be implemented
           */
          reason: '',
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

    onVisitHandler,
    onBarcodeHandler,
    onCancelHandler,
  }
}
