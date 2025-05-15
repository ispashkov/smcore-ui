import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../../api/api'
import { genClientsPagePath } from '../../../../format/path.format'
import { genClientDTO } from '../../../../mapping/clients.mapping'
import { callApi } from '../../../../utils/sagas.utils'
import { isDef } from '../../../../types/lang.types'
import { clientsEditPageOverviewActions } from './clients-edit-page-overview.slice'

export function* fetchClientsCategories(
  _action: ReturnType<typeof clientsEditPageOverviewActions.fetchClientsCategories>
) {
  try {
    const response: Awaited<ReturnType<typeof api.clientsCategoryService.fetchAll>> = yield callApi(
      api.clientsCategoryService.fetchAll,
      {
        size: 200,
      }
    )

    yield put(clientsEditPageOverviewActions.fetchClientsCategoriesSuccess(response.data))
  } catch {
    yield put(clientsEditPageOverviewActions.fetchClientsCategoriesError(new Error()))
  }
}

export function* updateClient(action: ReturnType<typeof clientsEditPageOverviewActions.updateClient>) {
  try {
    const { clientId, clientsFormValues } = action.payload
    const clientDTO = genClientDTO(clientsFormValues)

    if (isDef(clientDTO)) {
      yield callApi(api.clientsService.update, clientId, clientDTO)

      yield put(clientsEditPageOverviewActions.updateClientSuccess())
      yield put(push(genClientsPagePath()))
    } else {
      yield put(clientsEditPageOverviewActions.updateClientError(new Error()))
    }
  } catch {
    yield put(clientsEditPageOverviewActions.updateClientError(new Error()))
  }
}

export function* clientsEditPageOverviewSagas() {
  yield takeLatest(clientsEditPageOverviewActions.fetchClientsCategories, fetchClientsCategories)
  yield takeLatest(clientsEditPageOverviewActions.updateClient, updateClient)
}
