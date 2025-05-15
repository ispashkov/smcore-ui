import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genDirectionsPagePath } from '../../../format/path.format'
import { directionsEditPageActions } from './directions-edit-page.slice'
import { genDirectionDTO } from '../../../mapping/directions.mapping'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchDirectionById(action: ReturnType<typeof directionsEditPageActions.fetchDirectionById>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchById>> = yield callApi(
      api.exercisesDirectionsService.fetchById,
      action.payload
    )

    yield put(directionsEditPageActions.fetchDirectionByIdSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(directionsEditPageActions.fetchDirectionByIdError(new Error()))
  }
}

export function* updateDirection(action: ReturnType<typeof directionsEditPageActions.updateDirection>) {
  try {
    const { id, data } = action.payload
    const directionDTO = genDirectionDTO(data)

    yield callApi(api.exercisesDirectionsService.update, id, directionDTO)

    yield put(directionsEditPageActions.updateDirectionSuccess())
    yield put(push(genDirectionsPagePath()))
  } catch (e) {
    console.error(e)
    yield put(directionsEditPageActions.updateDirectionError(new Error()))
  }
}

export function* directionsEditPageSagas() {
  yield takeLatest(directionsEditPageActions.fetchDirectionById, fetchDirectionById)
  yield takeLatest(directionsEditPageActions.updateDirection, updateDirection)
}
