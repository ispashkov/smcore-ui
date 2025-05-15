import { ClientSubscriptionStatus } from '../../../types/clients-subscriptions.types'
import { TimeLimitation } from '../../../types/time-limitation.types'
import { EntityItem, NString, Nullable } from '../../../types/lang.types'

export interface ClientsSubscriptionsTableDataItem {
  id: string
  expirationDate: string
  purchaseDate: string
  visitsLeft: number
  visitsTotal: number
  status: ClientSubscriptionStatus
  timeLimitation: TimeLimitation
  hasStudioLimitation: boolean
  studios: Nullable<EntityItem<string>[]>
  activationDate: NString
  autoActivationDate: NString
}
