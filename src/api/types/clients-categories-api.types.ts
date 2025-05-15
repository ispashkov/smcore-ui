import { ColoredDictionaryItem, PaginationParamsDTO } from './api.types'

export namespace ClientsCategoriesApi {
  export type ClientCategory = ColoredDictionaryItem<number>

  export interface ClientCategoryDTO {
    name: string
    color: string
  }

  export interface ClientsCategoriesFetchAllParams extends PaginationParamsDTO {
    name: string
  }
}
