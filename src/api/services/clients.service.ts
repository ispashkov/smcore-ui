import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination } from '../types/api.types'
import { ClientsApi } from '../types/clients-api.types'

export class ClientsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: ClientsApi.ClientDTO): Promise<AxiosResponse<ClientsApi.Client>> => {
    return this.httpConnector.post<ClientsApi.Client>('/clients', data)
  }

  public fetchAll = (
    params: Nullable<Partial<ClientsApi.ClientsFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<ClientsApi.Client>>> => {
    return this.httpConnector.get<Pagination<ClientsApi.Client>>('/clients', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ClientsApi.Client>> => {
    return this.httpConnector.get<ClientsApi.Client>(`/clients/${id}`)
  }

  public update = (id: string, data: ClientsApi.ClientDTO): Promise<AxiosResponse<ClientsApi.Client>> => {
    return this.httpConnector.patch<ClientsApi.Client>(`/clients/${id}`, data)
  }

  public remove = (id: string | number): Promise<void> => {
    return this.httpConnector.delete(`/clients/${id}`)
  }
}
