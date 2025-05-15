import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genStudiosPagePath } from '../../../format/path.format'
import { studiosCreatePageActions } from './studios-create-page.slice'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { genStudiosDTO } from '../../../mapping/studios.mapping'
import { callApi } from '../../../utils/sagas.utils'

export function* createStudio(action: ReturnType<typeof studiosCreatePageActions.createStudio>) {
  try {
    const studiosDTO = genStudiosDTO(action.payload) as StudiosApi.StudioCreateDTO

    yield callApi(api.studiosService.create, studiosDTO)

    yield put(studiosCreatePageActions.createStudioSuccess())
    yield put(push(genStudiosPagePath()))
  } catch (e) {
    console.error(e)
    yield put(studiosCreatePageActions.createStudioError(new Error()))
  }
}

export function* fetchAllFranchises(_: ReturnType<typeof studiosCreatePageActions.fetchAllFranchises>) {
  try {
    const response: Awaited<ReturnType<typeof api.organizationsService.fetchAll>> = yield callApi(
      api.organizationsService.fetchAll,
      {
        size: 100,
      }
    )
    yield put(studiosCreatePageActions.fetchAllFranchisesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(studiosCreatePageActions.fetchFranchisesError(new Error()))
  }
}

export function* fetchAllDirections(_: ReturnType<typeof studiosCreatePageActions.fetchAllDirections>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>> = yield callApi(
      api.exercisesDirectionsService.fetchAll,
      {
        size: 100,
      }
    )
    yield put(studiosCreatePageActions.fetchAllDirectionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(studiosCreatePageActions.fetchDirectionsError(new Error()))
  }
}

export function* studiosCreatePageSagas() {
  yield takeLatest(studiosCreatePageActions.createStudio, createStudio)
  yield takeLatest(studiosCreatePageActions.fetchAllFranchises, fetchAllFranchises)
  yield takeLatest(studiosCreatePageActions.fetchAllDirections, fetchAllDirections)
}
