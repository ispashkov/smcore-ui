import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { ProductsSubscriptionsApi } from '../types/products-subscriptions-api.types'
import { Nullable } from '../../types/lang.types'
import { Pagination } from '../types/api.types'

export class ProductsSubscriptionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ProductsSubscriptionsApi.ProductSubscriptionDTO
  ): Promise<AxiosResponse<ProductsSubscriptionsApi.ProductSubscription>> => {
    return this.httpConnector.post<ProductsSubscriptionsApi.ProductSubscription>(`/products/subscriptions`, data)
  }

  public fetchAll = (
    params: Nullable<Partial<ProductsSubscriptionsApi.ProductSubscriptionFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<ProductsSubscriptionsApi.ProductSubscription>>> => {
    return this.httpConnector.get<Pagination<ProductsSubscriptionsApi.ProductSubscription>>('/products/subscriptions', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ProductsSubscriptionsApi.ProductSubscription>> => {
    return this.httpConnector.get<ProductsSubscriptionsApi.ProductSubscription>(`/products/subscriptions/${id}`)
  }

  public update = (
    id: string,
    data: ProductsSubscriptionsApi.ProductSubscriptionDTO
  ): Promise<AxiosResponse<ProductsSubscriptionsApi.ProductSubscription>> => {
    return this.httpConnector.patch<ProductsSubscriptionsApi.ProductSubscription>(`/products/subscriptions/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/products/subscriptions/${id}`)
  }
}
