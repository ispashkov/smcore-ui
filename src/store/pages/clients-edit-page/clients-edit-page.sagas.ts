import { all, spawn } from 'redux-saga/effects'

import { clientsEditPageCommonSagas } from './clients-edit-page-common/clients-edit-page-common.sagas'
import { clientsEditPageOverviewSagas } from './clients-edit-page-overview/clients-edit-page-overview.sagas'
import { clientsEditPageSubscriptionsSagas } from './clients-edit-page-subscriptions/clients-edit-page-subscriptions.sagas'
import { clientsEditPageSubscriptionsPauseModalSagas } from './clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.sagas'
import { clientsEditPagePurchasesSagas } from './clients-edit-page-purchases/clients-edit-page-purchases.sagas'
import { clientsEditPageBookingsActiveSagas } from './clients-edit-page-bookings-active/clients-edit-page-bookings-active.sagas'
import { clientsEditPageBookingsHistorySagas } from './clients-edit-page-bookings-history/clients-edit-page-bookings-history.sagas'

export function* clientsEditPageSagas() {
  yield all(
    [
      clientsEditPageCommonSagas,
      clientsEditPageOverviewSagas,
      clientsEditPageSubscriptionsSagas,
      clientsEditPageSubscriptionsPauseModalSagas,
      clientsEditPagePurchasesSagas,
      clientsEditPageBookingsActiveSagas,
      clientsEditPageBookingsHistorySagas,
    ].map(saga => spawn(saga))
  )
}
