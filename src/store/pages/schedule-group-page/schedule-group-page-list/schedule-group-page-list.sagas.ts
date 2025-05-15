import { put, takeLatest, call, all, take, select, race } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { api } from '../../../../api/api'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { AppPath } from '../../../../types/path.types'
import { ScheduleGroupPageUrlParams } from '../../../../pages/schedule-group-page/schedule-group-page.types'
import { genScheduleGroupPageParams } from '../../../../pages/schedule-group-page/schedule-group-page.utils'
import { modalActions } from '../../../common/modal/modal.slice'
import { AppState } from '../../../app.store'
import { scheduleGroupPageListActions } from './schedule-group-page-list.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof scheduleGroupPageListActions.fetchPageData>) {
  try {
    const { id, params } = action.payload

    yield all([
      put(scheduleGroupPageListActions.fetchExercise(id)),
      put(scheduleGroupPageListActions.fetchBookings({ id, params })),
      put(scheduleGroupPageListActions.fetchClientsInWaitingList({ exerciseId: id })),
    ])

    yield all([
      take(scheduleGroupPageListActions.fetchExerciseSuccess.type),
      take(scheduleGroupPageListActions.fetchBookingsSuccess.type),
      take(scheduleGroupPageListActions.fetchClientsInWaitingListSuccess.type),
    ])

    yield put(scheduleGroupPageListActions.fetchPageDataSuccess())
  } catch (e) {
    yield put(scheduleGroupPageListActions.fetchPageDataError(new Error()))
  }
}

export function* fetchExercise(action: ReturnType<typeof scheduleGroupPageListActions.fetchExercise>) {
  try {
    const exerciseResponse: Awaited<ReturnType<typeof api.exercisesService.fetchById>> = yield callApi(
      api.exercisesService.fetchById,
      action.payload
    )

    yield put(scheduleGroupPageListActions.fetchExerciseSuccess(exerciseResponse.data))
  } catch (e) {
    yield put(scheduleGroupPageListActions.fetchExerciseError(new Error()))
  }
}

export function* reFetchExercise() {
  const search: H.Search = yield select(getSearch)
  const { params }: match<ScheduleGroupPageUrlParams> = yield select(
    createMatchSelector<AppState, ScheduleGroupPageUrlParams>(AppPath.SCHEDULE_GROUP)
  )
  const { scheduleId } = genScheduleGroupPageParams(params, search)

  yield put(scheduleGroupPageListActions.fetchExercise(scheduleId))

  yield race([
    take(scheduleGroupPageListActions.fetchExerciseSuccess.type),
    take(scheduleGroupPageListActions.fetchExerciseError.type),
  ])
}

export function* fetchBookings(action: ReturnType<typeof scheduleGroupPageListActions.fetchBookings>) {
  try {
    const { id, params } = action.payload
    const { page, size } = params

    const paginationParamsDTO = genPaginationParamsDTO(page, size)

    const bookingsResponse: Awaited<ReturnType<typeof api.exercisesService.fetchBookings>> = yield callApi(
      api.exercisesService.fetchBookings,
      id,
      paginationParamsDTO
    )

    yield put(scheduleGroupPageListActions.fetchBookingsSuccess(bookingsResponse.data))
  } catch (e) {
    yield put(scheduleGroupPageListActions.fetchBookingsError(new Error()))
  }
}

export function* reFetchBooking() {
  const search: H.Search = yield select(getSearch)
  const { params }: match<ScheduleGroupPageUrlParams> = yield select(
    createMatchSelector<AppState, ScheduleGroupPageUrlParams>(AppPath.SCHEDULE_GROUP)
  )
  const { scheduleId, page, size, productCategoryId } = genScheduleGroupPageParams(params, search)

  yield put(
    scheduleGroupPageListActions.fetchBookings({
      id: scheduleId,
      params: {
        page,
        size,
        productCategoryId,
      },
    })
  )

  yield race([
    take(scheduleGroupPageListActions.fetchBookingsSuccess.type),
    take(scheduleGroupPageListActions.fetchBookingsError.type),
  ])
}

export function* fetchClientsInWaitingList(
  action: ReturnType<typeof scheduleGroupPageListActions.fetchClientsInWaitingList>
) {
  try {
    const { exerciseId } = action.payload

    const response: Awaited<ReturnType<typeof api.exercisesService.fetchWaitingList>> = yield callApi(
      api.exercisesService.fetchWaitingList,
      exerciseId
    )

    yield put(scheduleGroupPageListActions.fetchClientsInWaitingListSuccess(response.data.totalElements))
  } catch {
    yield put(scheduleGroupPageListActions.fetchClientsInWaitingListError(new Error()))
  }
}

export function* reFetchClientsInWaitingList() {
  const search: H.Search = yield select(getSearch)
  const { params }: match<ScheduleGroupPageUrlParams> = yield select(
    createMatchSelector<AppState, ScheduleGroupPageUrlParams>(AppPath.SCHEDULE_GROUP)
  )
  const { scheduleId } = genScheduleGroupPageParams(params, search)

  yield put(
    scheduleGroupPageListActions.fetchClientsInWaitingList({
      exerciseId: scheduleId,
    })
  )

  yield race([
    take(scheduleGroupPageListActions.fetchClientsInWaitingListSuccess.type),
    take(scheduleGroupPageListActions.fetchClientsInWaitingListError.type),
  ])
}

export function* cancelBooking(action: ReturnType<typeof scheduleGroupPageListActions.cancelBooking>) {
  try {
    const { exerciseId, bookingId, reason } = action.payload

    yield callApi(api.exercisesService.cancelBooking, exerciseId, bookingId, { cancellationReason: reason })
    yield put(scheduleGroupPageListActions.cancelBookingSuccess())

    yield call(reFetchBooking)

    yield put(modalActions.closeLast())
  } catch (e) {
    yield put(scheduleGroupPageListActions.cancelBookingError(new Error()))
  }
}

export function* changeBookingVisitingConfirmation(
  action: ReturnType<typeof scheduleGroupPageListActions.changeBookingVisitingConfirmation>
) {
  try {
    const { exerciseId, bookingId, confirm } = action.payload

    if (confirm) {
      yield callApi(api.exercisesService.confirmBookingVisiting, exerciseId, bookingId)
    } else {
      yield callApi(api.exercisesService.cancelConfirmBookingVisiting, exerciseId, bookingId)
    }

    yield put(scheduleGroupPageListActions.changeBookingVisitingConfirmationSuccess())

    yield call(reFetchBooking)
  } catch (e) {
    yield put(scheduleGroupPageListActions.changeBookingVisitingConfirmationError(new Error()))
  }
}

export function* scheduleGroupPageListSagas() {
  yield takeLatest(scheduleGroupPageListActions.fetchPageData.type, fetchPageData)
  yield takeLatest(scheduleGroupPageListActions.fetchExercise.type, fetchExercise)
  yield takeLatest(scheduleGroupPageListActions.fetchBookings.type, fetchBookings)
  yield takeLatest(scheduleGroupPageListActions.fetchClientsInWaitingList, fetchClientsInWaitingList)
  yield takeLatest(scheduleGroupPageListActions.cancelBooking.type, cancelBooking)
  yield takeLatest(
    scheduleGroupPageListActions.changeBookingVisitingConfirmation.type,
    changeBookingVisitingConfirmation
  )
}
