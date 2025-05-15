import { put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { callApi } from '../../../../utils/sagas.utils'
import { clientsEditPageBookingsHistoryActions } from './clients-edit-page-bookings-history.slice'

export function* fetchBookings(action: ReturnType<typeof clientsEditPageBookingsHistoryActions.fetchBookings>) {
  try {
    const { clientId, page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.clientsBookingsService.fetchAllPast>> = yield callApi(
      api.clientsBookingsService.fetchAllPast,
      clientId,
      params
    )
    yield put(clientsEditPageBookingsHistoryActions.fetchBookingsSuccess(response.data))
  } catch {
    yield put(clientsEditPageBookingsHistoryActions.fetchBookingsError(new Error()))
  }
}

export function* clientsEditPageBookingsHistorySagas() {
  yield takeLatest(clientsEditPageBookingsHistoryActions.fetchBookings.type, fetchBookings)
}
