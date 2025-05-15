import { combineReducers } from '@reduxjs/toolkit'

import { clientsEditPageCommonReducer } from './clients-edit-page-common/clients-edit-page-common.slice'
import { clientsEditPageOverviewReducer } from './clients-edit-page-overview/clients-edit-page-overview.slice'
import { clientsEditPageSubscriptionsReducer } from './clients-edit-page-subscriptions/clients-edit-page-subscriptions.slice'
import { clientsEditPageSubscriptionsPauseModalReducer } from './clients-edit-page-subscriptions-pause-modal/clients-edit-page-subscriptions-pause-modal.slice'
import { clientsEditPagePurchasesReducer } from './clients-edit-page-purchases/clients-edit-page-purchases.slice'
import { clientsEditPageBookingsActiveReducer } from './clients-edit-page-bookings-active/clients-edit-page-bookings-active.slice'
import { clientsEditPageBookingsHistoryReducer } from './clients-edit-page-bookings-history/clients-edit-page-bookings-history.slice'

export const clientsEditPageReducer = combineReducers({
  clientsEditPageCommon: clientsEditPageCommonReducer,
  clientsEditPageOverview: clientsEditPageOverviewReducer,
  clientsEditPageSubscriptions: clientsEditPageSubscriptionsReducer,
  clientsEditPageSubscriptionsPauseModal: clientsEditPageSubscriptionsPauseModalReducer,
  clientsEditPagePurchases: clientsEditPagePurchasesReducer,
  clientsEditPageBookingsActive: clientsEditPageBookingsActiveReducer,
  clientsEditPageBookingsHistory: clientsEditPageBookingsHistoryReducer,
})
