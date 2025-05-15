import { DefaultOptionType } from 'antd/lib/select'

import { Nullable } from '../../../types/lang.types'
import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'

export interface ProductsSubscriptionsFormValue {
  id?: string
  name: string
  cost: number
  visits: number
  validityDays: number
  freezingDays: number
  activationDays: number
  hasStudioLimitation: boolean
  availableStudios: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  hasDirectionLimitation: boolean
  availableDirections: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  hasTypeLimitation: boolean
  availableTypes: Nullable<DefaultOptionType> | Nullable<DefaultOptionType[] | string[]>
  timeLimitation: 'NONE'
  type: ProductsSubscriptionsApi.ProductSubscriptionType
}
