import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { TrainersCategoriesApi } from '../types/trainers-categories-api.types'
import { Pagination } from '../types/api.types'
import { Nullable } from '../../types/lang.types'

export class TrainersCategoriesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: TrainersCategoriesApi.TrainerCategoryDTO
  ): Promise<AxiosResponse<TrainersCategoriesApi.TrainerCategory>> => {
    return this.httpConnector.post<TrainersCategoriesApi.TrainerCategory>(`/trainers/categories`, data)
  }

  public fetchAll = (
    params: Nullable<Partial<TrainersCategoriesApi.TrainerCategoryFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<TrainersCategoriesApi.TrainerCategory>>> => {
    return this.httpConnector.get<Pagination<TrainersCategoriesApi.TrainerCategory>>('/trainers/categories', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<TrainersCategoriesApi.TrainerCategory>> => {
    return this.httpConnector.get<TrainersCategoriesApi.TrainerCategory>(`/trainers/categories/${id}`)
  }

  public update = (
    id: string,
    data: TrainersCategoriesApi.TrainerCategoryDTO
  ): Promise<AxiosResponse<TrainersCategoriesApi.TrainerCategory>> => {
    return this.httpConnector.patch<TrainersCategoriesApi.TrainerCategory>(`/trainers/categories/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/trainers/categories/${id}`)
  }
}
