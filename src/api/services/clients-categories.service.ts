import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { ClientsCategoriesApi } from '../types/clients-categories-api.types'

export class ClientsCategoriesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ClientsCategoriesApi.ClientCategoryDTO
  ): Promise<AxiosResponse<ClientsCategoriesApi.ClientCategory>> => {
    return this.httpConnector.post<ClientsCategoriesApi.ClientCategory>('/clients/categories', data)
  }

  public fetchAll = (
    params: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ClientsCategoriesApi.ClientCategory>>> => {
    return this.httpConnector.get<Pagination<ClientsCategoriesApi.ClientCategory>>('/clients/categories', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ClientsCategoriesApi.ClientCategory>> => {
    return this.httpConnector.get<ClientsCategoriesApi.ClientCategory>(`/clients/categories/${id}`)
  }

  public update = (
    id: string,
    data: ClientsCategoriesApi.ClientCategoryDTO
  ): Promise<AxiosResponse<ClientsCategoriesApi.ClientCategory>> => {
    return this.httpConnector.patch<ClientsCategoriesApi.ClientCategory>(`/clients/categories/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/clients/categories/${id}`)
  }
}
