import { all, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genStudiosPagePath } from '../../../format/path.format'
import { studiosEditPageActions } from './studios-edit-page.slice'
import { genStudiosDTO } from '../../../mapping/studios.mapping'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof studiosEditPageActions.fetchPageData>) {
  try {
    const [studio, franchises, directions]: [
      Awaited<ReturnType<typeof api.studiosService.fetchById>>,
      Awaited<ReturnType<typeof api.organizationsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>
    ] = yield all([
      callApi(api.studiosService.fetchById, action.payload),
      callApi(api.organizationsService.fetchAll, {
        size: 100,
      }),
      callApi(api.exercisesDirectionsService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(
      studiosEditPageActions.fetchPageDataSuccess({
        studio: studio.data,
        franchises: franchises.data,
        directions: directions.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(studiosEditPageActions.fetchPageDataError(new Error()))
  }
}

export function* updateStudio(action: ReturnType<typeof studiosEditPageActions.updateStudio>) {
  try {
    const { id, data } = action.payload
    const studioDTO = genStudiosDTO(data) as StudiosApi.StudioCreateDTO

    yield callApi(api.studiosService.update, id, studioDTO)

    yield put(studiosEditPageActions.updateStudioSuccess())
    yield put(push(genStudiosPagePath()))
  } catch (e) {
    console.error(e)
    yield put(studiosEditPageActions.updateStudioError(new Error()))
  }
}

export function* studiosEditPageSagas() {
  yield takeLatest(studiosEditPageActions.fetchPageData, fetchPageData)
  yield takeLatest(studiosEditPageActions.updateStudio, updateStudio)
}
