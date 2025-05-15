import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genClientsPagePath } from '../../../format/path.format'
import { genClientDTO } from '../../../mapping/clients.mapping'
import { isDef } from '../../../types/lang.types'
import { clientsCreatePageActions } from './clients-create-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllCategories(_: ReturnType<typeof clientsCreatePageActions.fetchAllCategories>) {
  try {
    const response: Awaited<ReturnType<typeof api.clientsCategoryService.fetchAll>> = yield callApi(
      api.clientsCategoryService.fetchAll,
      {
        size: 100,
      }
    )

    yield put(clientsCreatePageActions.fetchAllCategoriesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(clientsCreatePageActions.fetchAllCategoriesError(new Error()))
  }
}

export function* createClient(action: ReturnType<typeof clientsCreatePageActions.createClient>) {
  try {
    const clientDTO = genClientDTO(action.payload)

    if (isDef(clientDTO)) {
      yield callApi(api.clientsService.create, clientDTO)
      yield put(clientsCreatePageActions.createClientSuccess())
      yield put(push(genClientsPagePath()))
    } else {
      yield put(clientsCreatePageActions.createClientError(new Error()))
    }
  } catch (e) {
    console.error(e)
    yield put(clientsCreatePageActions.createClientError(new Error()))
  }
}

export function* clientsCreatePageSagas() {
  yield takeLatest(clientsCreatePageActions.createClient, createClient)
  yield takeLatest(clientsCreatePageActions.fetchAllCategories, fetchAllCategories)
}
