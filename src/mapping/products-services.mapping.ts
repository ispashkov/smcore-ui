import { DefaultOptionType } from 'antd/lib/select'

import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ProductsServicesTableRow } from '../components/products/products-services-table/products-services-table.types'
import { ProductsServicesApi } from '../api/types/products-services-api.types'
import { ServiceFormValues } from '../components/products/products-services-form/product-services-form.types'
import { castStringToBoolean } from '../components/products/products-services-form/product-services-form.utils'
import { TimeLimitation } from '../api/types/api.types'

export function genProductsServicesDTO(
  data: ServiceFormValues
): ProductsServicesApi.ProductCreateDTO | ProductsServicesApi.ProductEditDTO {
  return {
    ...data,
    hasDirectionLimitation: castStringToBoolean(data.hasDirectionLimitation),
    hasStudioLimitation: castStringToBoolean(data.hasStudioLimitation),
    hasTypeLimitation: castStringToBoolean(data.hasTypeLimitation),
    availableStudios: data.availableStudios?.map((studio: DefaultOptionType) => studio.value),
    availableDirections: data.availableDirections?.map((studio: DefaultOptionType) => studio.value),
    availableTypes: data.availableTypes?.map((studio: DefaultOptionType) => studio.value),
    cost: data.cost * 100,
    trialCost: data.trialCost * 100,
    timeLimitation: TimeLimitation.NONE,
  }
}

export function mapProductsServices(
  services: Nullable<ProductsServicesApi.ProductService[]>
): Nullable<ProductsServicesTableRow[]> {
  if (isDefAndNotEmpty(services)) {
    return services.map(
      (service: ProductsServicesApi.ProductService): ProductsServicesTableRow => ({
        id: service.id,
        name: service.name,
        cost: service.cost / 100,
        trialCost: service.trialCost / 100,
        availableStudios: service.availableStudios?.length || 0,
      })
    )
  }

  return null
}

export function genProductServicesFormValues(
  data: Nullable<ProductsServicesApi.ProductService>
): Nullable<ServiceFormValues> {
  if (isDef(data)) {
    return {
      ...data,
      availableStudios: data.availableStudios?.map(studio => ({ label: studio.name, value: studio.id })),
      availableDirections: data.availableDirections?.map(studio => ({ label: studio.name, value: studio.id })),
      availableTypes: data.availableTypes?.map(studio => ({ label: studio.name, value: studio.id })),
      cost: data.cost / 100,
      trialCost: data.trialCost / 100,
      timeLimitation: TimeLimitation.NONE,
    }
  }

  return null
}
