import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'

export interface ProductsSubscriptionsTableActions {
  onEdit: (id: string, type: ProductsSubscriptionsApi.ProductSubscriptionType) => void
  onRemove: (id: string) => void
}

export interface ProductsSubscriptionsTableRow {
  id: string
  name: string
  visits: number
  validityDays: number
  freezingDays: number
  activationDays: number
  availableStudios: number
  timeLimitation: string
  cost: number
  type: ProductsSubscriptionsApi.ProductSubscriptionType
}
