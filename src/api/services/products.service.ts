import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { ProductsApi } from '../types/products-api.types'
import { Pagination } from '../types/api.types'

export class ProductsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchAll = (
    params?: Nullable<Partial<ProductsApi.ProductFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<ProductsApi.Product>>> => {
    return this.httpConnector.get<Pagination<ProductsApi.Product>>('/products', { params })
  }
}
