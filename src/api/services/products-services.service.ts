import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { ProductsServicesApi } from '../types/products-services-api.types'
import { Nullable } from '../../types/lang.types'
import { Pagination, PaginationParamsDTO } from '../types/api.types'

export class ProductsServicesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ProductsServicesApi.ProductCreateDTO
  ): Promise<AxiosResponse<ProductsServicesApi.ProductService>> => {
    return this.httpConnector.post<ProductsServicesApi.ProductService>(`/products/services`, data)
  }

  public fetchAll = (
    params: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ProductsServicesApi.ProductService>>> => {
    return this.httpConnector.get<Pagination<ProductsServicesApi.ProductService>>('/products/services', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ProductsServicesApi.ProductService>> => {
    return this.httpConnector.get<ProductsServicesApi.ProductService>(`/products/services/${id}`)
  }

  public update = (
    id: string,
    data: ProductsServicesApi.ProductEditDTO
  ): Promise<AxiosResponse<ProductsServicesApi.ProductService>> => {
    return this.httpConnector.patch<ProductsServicesApi.ProductService>(`/products/services/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/products/services/${id}`)
  }
}
