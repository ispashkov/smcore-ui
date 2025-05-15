import { call, put, race, select, take, takeLatest } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { AppState } from '../../../app.store'
import { api } from '../../../../api/api'
import { callApi } from '../../../../utils/sagas.utils'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { ClientsEditPageUrlParams } from '../../../../pages/clients-edit-page/clients-edit-page.types'
import { genClientsEditPageParams } from '../../../../pages/clients-edit-page/clients-edit-page.utils'
import { AppPath } from '../../../../types/path.types'
import { clientsEditPageSubscriptionsActions } from './clients-edit-page-subscriptions.slice'

export function* fetchClientsSubscriptions(
  action: ReturnType<typeof clientsEditPageSubscriptionsActions.fetchClientsSubscriptions>
) {
  try {
    const { clientId, page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.clientsSubscriptionsService.fetchAll>> = yield callApi(
      api.clientsSubscriptionsService.fetchAll,
      clientId,
      params
    )

    yield put(clientsEditPageSubscriptionsActions.fetchClientsSubscriptionsSuccess(response.data))
  } catch {
    yield put(clientsEditPageSubscriptionsActions.fetchClientsSubscriptionsError(new Error()))
  }
}

export function* reFetchClientsSubscriptions() {
  const search: H.Search = yield select(getSearch)
  const { params }: match<ClientsEditPageUrlParams> = yield select(
    createMatchSelector<AppState, ClientsEditPageUrlParams>(AppPath.CLIENTS_EDIT)
  )

  const { id, page, size } = genClientsEditPageParams(params, search)

  yield put(
    clientsEditPageSubscriptionsActions.fetchClientsSubscriptions({
      clientId: id,
      page,
      size,
    })
  )

  yield race([
    take(clientsEditPageSubscriptionsActions.fetchClientsSubscriptionsSuccess.type),
    take(clientsEditPageSubscriptionsActions.fetchClientsSubscriptionsError.type),
  ])
}

export function* resumeClientSubscription(
  action: ReturnType<typeof clientsEditPageSubscriptionsActions.resumeClientSubscription>
) {
  try {
    const { clientId, subscriptionId } = action.payload

    yield callApi(api.clientsSubscriptionsService.resume, clientId, subscriptionId)

    yield put(clientsEditPageSubscriptionsActions.resumeClientSubscriptionSuccess())

    yield call(reFetchClientsSubscriptions)
  } catch {
    yield put(clientsEditPageSubscriptionsActions.resumeClientSubscriptionError(new Error()))
  }
}

export function* refundClientSubscription(
  action: ReturnType<typeof clientsEditPageSubscriptionsActions.refundClientSubscription>
) {
  try {
    const { clientId, subscriptionId } = action.payload

    yield callApi(api.clientsSubscriptionsService.refund, clientId, subscriptionId)

    yield put(clientsEditPageSubscriptionsActions.refundClientSubscriptionSuccess())

    yield call(reFetchClientsSubscriptions)
  } catch {
    yield put(clientsEditPageSubscriptionsActions.refundClientSubscriptionError(new Error()))
  }
}

export function* clientsEditPageSubscriptionsSagas() {
  yield takeLatest(clientsEditPageSubscriptionsActions.fetchClientsSubscriptions.type, fetchClientsSubscriptions)
  yield takeLatest(clientsEditPageSubscriptionsActions.resumeClientSubscription.type, resumeClientSubscription)
  yield takeLatest(clientsEditPageSubscriptionsActions.refundClientSubscription.type, refundClientSubscription)
}
