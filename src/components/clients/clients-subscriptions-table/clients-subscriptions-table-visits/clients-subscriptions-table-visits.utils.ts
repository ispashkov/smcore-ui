import { BaseType } from 'antd/es/typography/Base'

import { ClientSubscriptionStatus } from '../../../../types/clients-subscriptions.types'

export function genClientsSubscriptionsTableVisitsTextType(status: ClientSubscriptionStatus): BaseType | undefined {
  if (status === ClientSubscriptionStatus.ACTIVE) {
    return 'success'
  }
}
