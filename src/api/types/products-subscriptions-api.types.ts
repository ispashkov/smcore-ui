import { Nullable } from '../../types/lang.types'
import { DictionaryItem, PaginationParamsDTO, TimeLimitation } from './api.types'

export namespace ProductsSubscriptionsApi {
  export enum ProductSubscriptionType {
    INDIVIDUAL = 'INDIVIDUAL',
    GROUP = 'GROUP',
  }

  export interface ProductSubscription {
    id: string
    name: string
    cost: number
    visits: number
    validityDays: number
    freezingDays: number
    activationDays: number
    hasStudioLimitation: boolean
    availableStudios: Nullable<DictionaryItem[]>
    hasDirectionLimitation: boolean
    availableDirections: Nullable<DictionaryItem[]>
    hasTypeLimitation: true
    availableTypes: Nullable<DictionaryItem[]>
    timeLimitation: TimeLimitation
    type: ProductSubscriptionType
  }

  export interface ProductSubscriptionDTO {
    id?: string
    name: string
    cost: number
    visits: number
    validityDays: number
    freezingDays: number
    activationDays: number
    hasStudioLimitation: boolean
    availableStudios: string[]
    hasDirectionLimitation: boolean
    availableDirections: string[]
    hasTypeLimitation: boolean
    availableTypes: string[]
    timeLimitation: TimeLimitation
    type: ProductSubscriptionType
  }

  export interface ProductSubscriptionFetchAllParams extends PaginationParamsDTO {
    type: ProductSubscriptionType
  }
}
