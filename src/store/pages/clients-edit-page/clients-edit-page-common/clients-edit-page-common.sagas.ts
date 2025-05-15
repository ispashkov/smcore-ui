import { put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { callApi } from '../../../../utils/sagas.utils'
import { clientsEditPageCommonActions } from './clients-edit-page-common.slice'

export function* fetchClient(action: ReturnType<typeof clientsEditPageCommonActions.fetchClient>) {
  try {
    const response: Awaited<ReturnType<typeof api.clientsService.fetchById>> = yield callApi(
      api.clientsService.fetchById,
      action.payload
    )

    yield put(clientsEditPageCommonActions.fetchClientSuccess(response.data))
  } catch (e) {
    yield put(clientsEditPageCommonActions.fetchClientError(new Error()))
  }
}

export function* clientsEditPageCommonSagas() {
  yield takeLatest(clientsEditPageCommonActions.fetchClient, fetchClient)
}
