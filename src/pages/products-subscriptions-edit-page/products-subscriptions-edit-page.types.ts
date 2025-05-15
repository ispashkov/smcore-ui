import { ProductsSubscriptionsApi } from '../../api/types/products-subscriptions-api.types'

export interface ProductEditPageParams {
  id?: string
  type: ProductsSubscriptionsApi.ProductSubscriptionType
}
