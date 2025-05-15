import { call, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { callApi } from '../../../../utils/sagas.utils'
import { genClientSubscriptionHoldDTO } from '../../../../mapping/clients-subscriptions.mapping'
import { modalActions } from '../../../common/modal/modal.slice'
import { reFetchClientsSubscriptions } from '../clients-edit-page-subscriptions/clients-edit-page-subscriptions.sagas'
import { clientsEditPageSubscriptionsPauseModalActions } from './clients-edit-page-subscriptions-pause-modal.slice'

export function* pause(action: ReturnType<typeof clientsEditPageSubscriptionsPauseModalActions.pause>) {
  try {
    const { clientId, subscriptionId, clientsSubscriptionsPauseFormValues } = action.payload

    const clientSubscriptionHoldDTO = genClientSubscriptionHoldDTO(clientsSubscriptionsPauseFormValues)

    yield callApi(api.clientsSubscriptionsService.hold, clientId, subscriptionId, clientSubscriptionHoldDTO)

    yield put(clientsEditPageSubscriptionsPauseModalActions.pauseSuccess())
    yield put(modalActions.closeLast())

    yield call(reFetchClientsSubscriptions)
  } catch {
    yield put(clientsEditPageSubscriptionsPauseModalActions.pauseError(new Error()))
  }
}

export function* clientsEditPageSubscriptionsPauseModalSagas() {
  yield takeLatest(clientsEditPageSubscriptionsPauseModalActions.pause, pause)
}
