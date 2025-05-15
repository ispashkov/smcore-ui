import { DefaultOptionType } from 'antd/lib/select'

import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ProductsSubscriptionsApi } from '../api/types/products-subscriptions-api.types'
import { ProductsSubscriptionsTableRow } from '../components/products/products-subscriptions-table/products-subscriptions-table.types'
import { ProductsSubscriptionsFormValue } from '../components/products/products-subscriptions-form/products-subscriptions-form.types'
import { castStringToBoolean } from '../components/products/products-services-form/product-services-form.utils'
import { TimeLimitation } from '../api/types/api.types'

export function mapProductsSubscriptions(
  subscriptions: Nullable<ProductsSubscriptionsApi.ProductSubscription[]>
): Nullable<ProductsSubscriptionsTableRow[]> {
  if (isDefAndNotEmpty(subscriptions)) {
    return subscriptions.map(
      (subscription: ProductsSubscriptionsApi.ProductSubscription): ProductsSubscriptionsTableRow => ({
        id: subscription.id,
        name: subscription.name,
        visits: subscription.visits,
        validityDays: subscription.validityDays,
        freezingDays: subscription.freezingDays,
        activationDays: subscription.activationDays,
        availableStudios: subscription.availableStudios?.length || 0,
        timeLimitation: subscription.timeLimitation,
        cost: subscription.cost / 100,
        type: subscription.type,
      })
    )
  }

  return null
}

export function genProductsSubscriptionsDTO(
  data: ProductsSubscriptionsFormValue
): ProductsSubscriptionsApi.ProductSubscriptionDTO {
  return {
    ...data,
    hasDirectionLimitation: castStringToBoolean(data.hasDirectionLimitation),
    hasStudioLimitation: castStringToBoolean(data.hasStudioLimitation),
    hasTypeLimitation: castStringToBoolean(data.hasTypeLimitation),
    availableStudios: data.availableStudios?.map((studio: DefaultOptionType) => studio.value),
    availableDirections: data.availableDirections?.map((studio: DefaultOptionType) => studio.value),
    availableTypes: data.availableTypes?.map((studio: DefaultOptionType) => studio.value),
    cost: data.cost * 100,
    timeLimitation: TimeLimitation.NONE,
  }
}

export function genProductSubscriptionFormValues(
  data: Nullable<ProductsSubscriptionsApi.ProductSubscription>
): Nullable<ProductsSubscriptionsFormValue> {
  if (isDef(data)) {
    return {
      ...data,
      availableStudios: data.availableStudios?.map(studio => ({ label: studio.name, value: studio.id })),
      availableDirections: data.availableDirections?.map(studio => ({ label: studio.name, value: studio.id })),
      availableTypes: data.availableTypes?.map(studio => ({ label: studio.name, value: studio.id })),
      cost: data.cost / 100,
      timeLimitation: TimeLimitation.NONE,
    }
  }

  return null
}
