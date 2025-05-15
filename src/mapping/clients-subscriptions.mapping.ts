import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ClientsSubscriptionsApi } from '../api/types/clients-subscriptions-api.types'
import { ClientsSubscriptionsTableDataItem } from '../components/clients/clients-subscriptions-table/clients-subscriptions-table.types'
import { ClientsSubscriptionsPauseFormValues } from '../components/clients/clients-subscriptions-pause-form/clients-subscriptions-pause-form.types'
import { mapDictionaryItemsListToEntityItemsList, mapTimeLimitationToClient } from './api.mapping'

export function mapClientsSubscriptionsToClientsSubscriptionsTableDataItems(
  subscriptions: Nullable<ClientsSubscriptionsApi.ClientSubscription[]>
): Nullable<ClientsSubscriptionsTableDataItem[]> {
  if (isDefAndNotEmpty(subscriptions)) {
    return subscriptions.reduce<ClientsSubscriptionsTableDataItem[]>((acc, subscription) => {
      const timeLimitation = mapTimeLimitationToClient(subscription.timeLimitation)

      if (isDef(timeLimitation)) {
        const clientsSubscriptionsTableDataItem: ClientsSubscriptionsTableDataItem = {
          id: subscription.subscriptionId,
          expirationDate: subscription.expirationDate,
          purchaseDate: subscription.purchaseDate,
          visitsLeft: subscription.visitsLeft,
          visitsTotal: subscription.visitsTotal,
          status: subscription.status,
          timeLimitation: subscription.timeLimitation,
          hasStudioLimitation: subscription.hasStudioLimitation,
          studios: mapDictionaryItemsListToEntityItemsList(subscription.availableStudios),
          activationDate: subscription.activationDate,
          autoActivationDate: subscription.autoActivationDate,
        }

        acc.push(clientsSubscriptionsTableDataItem)
      }

      return acc
    }, [])
  }

  return null
}

export function genClientSubscriptionHoldDTO(
  clientsSubscriptionsPauseFormValues: ClientsSubscriptionsPauseFormValues
): ClientsSubscriptionsApi.ClientSubscriptionHoldDTO {
  const { freezingDays } = clientsSubscriptionsPauseFormValues

  return {
    freezingDays,
  }
}
