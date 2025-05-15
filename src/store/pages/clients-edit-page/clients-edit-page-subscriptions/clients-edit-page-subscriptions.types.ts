import { NNumber } from '../../../../types/lang.types'

export type ClientsEditPageSubscriptionsFetchSubscriptionsPayload = {
  clientId: string
  page: NNumber
  size: NNumber
}

export type ClientsEditPageSubscriptionsResumeClientSubscriptionPayload = {
  clientId: string
  subscriptionId: string
}

export type ClientsEditPageSubscriptionsRefundClientSubscriptionPayload = {
  clientId: string
  subscriptionId: string
}
