import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genClientsEditPagePath } from '../../../format/path.format'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { clientsEditPageBookingsHistoryActions } from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-history/clients-edit-page-bookings-history.slice'
import {
  getClientsEditPageBookingsHistoryIsLoaded,
  getClientsEditPageBookingsHistoryIsLoading,
  getClientsEditPageBookingsHistoryTableDataItems,
  getClientsEditPageBookingsHistoryTotalElements,
} from '../../../store/pages/clients-edit-page/clients-edit-page-bookings-history/clients-edit-page-bookings-history.selectors'
import { useClientsEditPageParams } from '../clients-edit-page-hooks/clients-edit-page-params.hook'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModal } from '../../../types/modal.types'

export function useClientsEditPageBookingsHistory() {
  const { id, section, page, size } = useClientsEditPageParams()

  const { push } = useHistory()
  const dispatch = useDispatch()

  const data = useSelector(getClientsEditPageBookingsHistoryTableDataItems)
  const totalElements = useSelector(getClientsEditPageBookingsHistoryTotalElements)

  const isLoading = useSelector(getClientsEditPageBookingsHistoryIsLoading)
  const isLoaded = useSelector(getClientsEditPageBookingsHistoryIsLoaded)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  React.useEffect((): void => {
    dispatch(
      clientsEditPageBookingsHistoryActions.fetchBookings({
        clientId: id,
        page,
        size,
      })
    )
  }, [dispatch, id, page, size])

  React.useEffect(() => {
    return () => {
      dispatch(clientsEditPageBookingsHistoryActions.reset())
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
    (bookingId: string): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.CLIENTS_EDIT_PAGE_BOOKINGS_HISTORY_RECEIPTS_MODAL,
          props: { bookingId: bookingId },
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
