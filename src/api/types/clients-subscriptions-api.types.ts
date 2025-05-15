import { NString, Nullable } from '../../types/lang.types'
import { DictionaryItem, Receipt, TimeLimitation } from './api.types'

export namespace ClientsSubscriptionsApi {
  export enum ClientSubscriptionStatus {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    HOLD = 'HOLD',
    EXPIRED = 'EXPIRED',
    REFUNDED = 'REFUNDED',
  }

  export interface ClientSubscription {
    subscriptionId: string
    expirationDate: string
    visitsTotal: number
    visitsLeft: number
    activationDate: NString
    autoActivationDate: NString
    purchaseDate: string
    status: ClientSubscriptionStatus
    holdUntil: NString
    hasStudioLimitation: boolean
    availableStudios: DictionaryItem[]
    hasDirectionLimitation: boolean
    availableDirections: DictionaryItem<number>[]
    hasTypeLimitation: boolean
    availableTypes: DictionaryItem<number>[]
    timeLimitation: TimeLimitation
    receipts: Nullable<Receipt[]>
  }

  export interface ClientSubscriptionHoldDTO {
    freezingDays: number
  }
}
