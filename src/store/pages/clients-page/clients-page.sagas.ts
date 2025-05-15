import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../api/api'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { getRouterState } from '../../common/router/router.selectors'
import { clientsPageActions } from './clients-page.slice'
import { genClientsPageParams } from '../../../pages/clients-page/clients-page.utils'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllClients(action: ReturnType<typeof clientsPageActions.fetchAllClients>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const filterParams = {
      ...params,
    }

    const response: Awaited<ReturnType<typeof api.clientsService.fetchAll>> = yield callApi(
      api.clientsService.fetchAll,
      filterParams
    )

    yield put(clientsPageActions.fetchAllClientsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(clientsPageActions.fetchAllClientsError(new Error()))
  }
}

export function* removeClient(action: ReturnType<typeof clientsPageActions.removeClient>) {
  try {
    yield callApi(api.clientsService.remove, action.payload)

    yield put(clientsPageActions.removeClientSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genClientsPageParams(search)

    yield put(clientsPageActions.fetchAllClients(params))
  } catch (e) {
    console.error(e)
    yield put(clientsPageActions.removeClientError(new Error()))
  }
}

export function* clientsPageSagas() {
  yield takeLatest(clientsPageActions.fetchAllClients, fetchAllClients)
  yield takeLatest(clientsPageActions.removeClient, removeClient)
}
