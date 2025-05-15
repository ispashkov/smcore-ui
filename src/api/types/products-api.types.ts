import { NString } from '../../types/lang.types'
import { PaginationParamsDTO } from './api.types'

export namespace ProductsApi {
  export enum ProductType {
    SUBSCRIPTION = 'SUBSCRIPTION',
    SERVICE = 'SERVICE',
    GOODS = 'GOODS',
  }

  export interface Product {
    id: string
    name: string
    cost: number
    productType: ProductType
    photo: NString
  }

  export interface ProductFetchAllParams extends PaginationParamsDTO {
    name?: string
  }
}
