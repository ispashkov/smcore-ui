import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../api/api'
import { genDirectionsPageParams } from '../../../pages/directions-page/directions-page.utils'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { getRouterState } from '../../common/router/router.selectors'
import { directionsPageActions } from './directions-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllDirections(action: ReturnType<typeof directionsPageActions.fetchAllDirections>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>> = yield callApi(
      api.exercisesDirectionsService.fetchAll,
      params
    )

    yield put(directionsPageActions.fetchAllDirectionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(directionsPageActions.fetchAllDirectionsError(new Error()))
  }
}

export function* removeDirection(action: ReturnType<typeof directionsPageActions.removeDirection>) {
  try {
    yield callApi(api.exercisesDirectionsService.remove, action.payload)

    yield put(directionsPageActions.removeDirectionSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genDirectionsPageParams(search)

    yield put(directionsPageActions.fetchAllDirections(params))
  } catch (e) {
    console.error(e)
    yield put(directionsPageActions.removeDirectionError(new Error()))
  }
}

export function* directionsPageSagas() {
  yield takeLatest(directionsPageActions.fetchAllDirections, fetchAllDirections)
  yield takeLatest(directionsPageActions.removeDirection, removeDirection)
}
