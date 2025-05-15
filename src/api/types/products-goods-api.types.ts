import { DictionaryItem, PaginationParamsDTO } from './api.types'

export namespace ProductsGoodsApi {
  export interface ProductGoodsProvider {
    id: string
    name: string
    phone: string
  }

  export interface ProductGoods {
    id: string
    name: string
    category: DictionaryItem
    cost: number
    count: number
    productionDate: string
    expirationDate: string
    arrivalDate: string
    provider: ProductGoodsProvider
  }

  export interface ProductGoodsDTO {
    name: string
    categoryId: string
    cost: number
    count: number
    productionDate: string
    expirationDate: string
    arrivalDate: string
    providerId: string
  }

  export interface ProductGoodsFetchAllParams extends PaginationParamsDTO {}
}
