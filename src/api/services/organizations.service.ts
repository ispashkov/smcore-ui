import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { Nullable } from '../../types/lang.types'
import { OrganizationsApi } from '../types/organizations-api.types'

export class OrganizationsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: OrganizationsApi.OrganizationDTO): Promise<AxiosResponse<OrganizationsApi.Organization>> => {
    return this.httpConnector.post<OrganizationsApi.Organization>('/organizations', data)
  }

  public fetchAll = (
    params?: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<OrganizationsApi.Organization>>> => {
    return this.httpConnector.get<Pagination<OrganizationsApi.Organization>>('/organizations', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<OrganizationsApi.Organization>> => {
    return this.httpConnector.get<OrganizationsApi.Organization>(`/organizations/${id}`)
  }

  public update = (
    id: string,
    data: OrganizationsApi.OrganizationDTO
  ): Promise<AxiosResponse<OrganizationsApi.Organization>> => {
    return this.httpConnector.patch<OrganizationsApi.Organization>(`/organizations/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/organizations/${id}`)
  }
}
