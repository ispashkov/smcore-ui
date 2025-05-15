import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genDirectionsPagePath } from '../../../format/path.format'
import { genDirectionDTO } from '../../../mapping/directions.mapping'
import { directionsCreatePageActions } from './directions-create-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* createDirection(action: ReturnType<typeof directionsCreatePageActions.createDirection>) {
  try {
    const directionDTO = genDirectionDTO(action.payload)

    yield callApi(api.exercisesDirectionsService.create, directionDTO)

    yield put(directionsCreatePageActions.createDirectionSuccess())
    yield put(push(genDirectionsPagePath()))
  } catch (e) {
    console.error(e)
    yield put(directionsCreatePageActions.createDirectionError(new Error()))
  }
}

export function* directionsCreatePageSagas() {
  yield takeLatest(directionsCreatePageActions.createDirection, createDirection)
}
