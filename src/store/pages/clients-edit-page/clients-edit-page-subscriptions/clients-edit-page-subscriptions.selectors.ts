import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapClientsSubscriptionsToClientsSubscriptionsTableDataItems } from '../../../../mapping/clients-subscriptions.mapping'
import { Dict, isDef, isDefAndNotEmpty } from '../../../../types/lang.types'
import { ClientsSubscriptionsApi } from '../../../../api/types/clients-subscriptions-api.types'
import { mapTransactionsReceiptsToReceiptsListItemDataList } from '../../../../mapping/transactions.mapping'

const getClientsSubscriptionsInternal = (state: AppState) =>
  state.clientsEditPage.clientsEditPageSubscriptions.clientsSubscriptions

const getClientsSubscriptionIdInternal = (state: AppState, id: string) => id

export const getClientsEditPageSubscriptionsIsLoaded = (state: AppState) =>
  state.clientsEditPage.clientsEditPageSubscriptions.isLoaded
export const getClientsEditPageSubscriptionsIsLoading = (state: AppState) =>
  state.clientsEditPage.clientsEditPageSubscriptions.isLoading

export const getClientsEditPageSubscriptionsTableDataItems = createSelector(
  getClientsSubscriptionsInternal,
  subscriptions => mapClientsSubscriptionsToClientsSubscriptionsTableDataItems(subscriptions?.content)
)

export const getClientsEditPageSubscriptionsTotalElements = createSelector(
  getClientsSubscriptionsInternal,
  subscriptions => subscriptions?.totalElements
)

const getClientsSubscriptionsMapByIdInternal = createSelector(getClientsSubscriptionsInternal, subscriptions => {
  if (isDef(subscriptions)) {
    const { content } = subscriptions

    if (isDefAndNotEmpty(content)) {
      return content.reduce<Dict<ClientsSubscriptionsApi.ClientSubscription>>((acc, subscription) => {
        acc[subscription.subscriptionId] = subscription

        return acc
      }, {})
    }
  }

  return null
})

const getClientSubscriptionById = createSelector(
  getClientsSubscriptionsMapByIdInternal,
  getClientsSubscriptionIdInternal,
  (subscriptionsMap, subscriptionId) => {
    if (isDef(subscriptionsMap)) {
      return subscriptionsMap[subscriptionId]
    }

    return null
  }
)

export const getClientsEditPageSubscriptionsReceiptsById = createSelector(
  [getClientSubscriptionById],
  subscriptions => {
    if (isDef(subscriptions)) {
      return mapTransactionsReceiptsToReceiptsListItemDataList(subscriptions.receipts)
    }

    return null
  }
)
