import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { ProductsGoodsApi } from '../types/products-goods-api.types'
import { Pagination } from '../types/api.types'

export class ProductsGoodsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: ProductsGoodsApi.ProductGoodsDTO): Promise<AxiosResponse<ProductsGoodsApi.ProductGoods>> => {
    return this.httpConnector.post<ProductsGoodsApi.ProductGoods>('/products/goods', data)
  }

  public fetchAll = (
    params: Nullable<Partial<ProductsGoodsApi.ProductGoodsFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<ProductsGoodsApi.ProductGoods>>> => {
    return this.httpConnector.get<Pagination<ProductsGoodsApi.ProductGoods>>('/products/goods', { params })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ProductsGoodsApi.ProductGoods>> => {
    return this.httpConnector.get<ProductsGoodsApi.ProductGoods>(`/products/goods/${id}`)
  }

  public update = (
    id: string,
    data: ProductsGoodsApi.ProductGoodsDTO
  ): Promise<AxiosResponse<ProductsGoodsApi.ProductGoods>> => {
    return this.httpConnector.patch<ProductsGoodsApi.ProductGoods>(`/products/goods/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/products/goods/${id}`)
  }
}
