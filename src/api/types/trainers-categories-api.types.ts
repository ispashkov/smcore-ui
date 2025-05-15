import { DictionaryItem, PaginationParamsDTO } from './api.types'

export namespace TrainersCategoriesApi {
  export type TrainerCategory = DictionaryItem

  export interface TrainerCategoryDTO {
    name: string
  }

  export interface TrainerCategoryFetchAllParams extends PaginationParamsDTO {
    name: string
  }
}
