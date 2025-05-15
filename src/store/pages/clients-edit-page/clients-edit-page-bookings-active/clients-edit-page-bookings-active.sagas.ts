import { call, put, race, select, take, takeLatest } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { api } from '../../../../api/api'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { callApi } from '../../../../utils/sagas.utils'
import { AppPath } from '../../../../types/path.types'
import { AppState } from '../../../app.store'
import { ClientsEditPageUrlParams } from '../../../../pages/clients-edit-page/clients-edit-page.types'
import { genClientsEditPageParams } from '../../../../pages/clients-edit-page/clients-edit-page.utils'
import { clientsEditPageBookingsActiveActions } from './clients-edit-page-bookings-active.slice'

export function* fetchBookings(action: ReturnType<typeof clientsEditPageBookingsActiveActions.fetchBookings>) {
  try {
    const { clientId, page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.clientsBookingsService.fetchAllActive>> = yield callApi(
      api.clientsBookingsService.fetchAllActive,
      clientId,
      params
    )
    yield put(clientsEditPageBookingsActiveActions.fetchBookingsSuccess(response.data))
  } catch {
    yield put(clientsEditPageBookingsActiveActions.fetchBookingsError(new Error()))
  }
}

export function* reFetchBookings() {
  const search: H.Search = yield select(getSearch)
  const { params }: match<ClientsEditPageUrlParams> = yield select(
    createMatchSelector<AppState, ClientsEditPageUrlParams>(AppPath.CLIENTS_EDIT)
  )
  const { id, page, size } = genClientsEditPageParams(params, search)

  yield put(
    clientsEditPageBookingsActiveActions.fetchBookings({
      clientId: id,
      page,
      size,
    })
  )

  yield race([
    take(clientsEditPageBookingsActiveActions.fetchBookingsSuccess.type),
    take(clientsEditPageBookingsActiveActions.fetchBookingsError.type),
  ])
}

export function* changeBookingVisitingConfirmation(
  action: ReturnType<typeof clientsEditPageBookingsActiveActions.changeBookingVisitingConfirmation>
) {
  try {
    const { exerciseId, bookingId, confirm } = action.payload

    if (confirm) {
      yield callApi(api.exercisesService.confirmBookingVisiting, exerciseId, bookingId)
    } else {
      yield callApi(api.exercisesService.cancelConfirmBookingVisiting, exerciseId, bookingId)
    }

    yield put(clientsEditPageBookingsActiveActions.changeBookingVisitingConfirmationSuccess())
    yield call(reFetchBookings)
  } catch {
    yield put(clientsEditPageBookingsActiveActions.changeBookingVisitingConfirmationError(new Error()))
  }
}

export function* cancelBooking(action: ReturnType<typeof clientsEditPageBookingsActiveActions.cancelBooking>) {
  try {
    const { bookingId, exerciseId, reason } = action.payload

    yield callApi(api.exercisesService.cancelBooking, exerciseId, bookingId, { cancellationReason: reason })
    yield put(clientsEditPageBookingsActiveActions.cancelBookingSuccess())

    yield call(reFetchBookings)
  } catch {
    yield put(clientsEditPageBookingsActiveActions.cancelBookingError(new Error()))
  }
}

export function* clientsEditPageBookingsActiveSagas() {
  yield takeLatest(clientsEditPageBookingsActiveActions.fetchBookings.type, fetchBookings)
  yield takeLatest(
    clientsEditPageBookingsActiveActions.changeBookingVisitingConfirmation.type,
    changeBookingVisitingConfirmation
  )
  yield takeLatest(clientsEditPageBookingsActiveActions.cancelBooking.type, cancelBooking)
}
