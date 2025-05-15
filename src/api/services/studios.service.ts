import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { StudiosApi } from '../types/studios-api.types'
import { Pagination, PaginationParamsDTO } from '../types/api.types'

export class StudiosService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: StudiosApi.StudioCreateDTO): Promise<AxiosResponse<StudiosApi.Studio>> => {
    return this.httpConnector.post<StudiosApi.Studio>('/studios', data)
  }

  public fetchAll = (
    params?: Nullable<Partial<StudiosApi.StudiosFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<StudiosApi.Studio>>> => {
    return this.httpConnector.get<Pagination<StudiosApi.Studio>>('/studios', { params })
  }

  public fetchById = (id: string): Promise<AxiosResponse<StudiosApi.Studio>> => {
    return this.httpConnector.get<StudiosApi.Studio>(`/studios/${id}`)
  }

  public update = (id: string, data: StudiosApi.StudioUpdateDTO): Promise<AxiosResponse<StudiosApi.Studio>> => {
    return this.httpConnector.patch<StudiosApi.Studio>(`/studios/${id}`, data)
  }

  public remove = (id: string | number): Promise<void> => {
    return this.httpConnector.delete(`/studios/${id}`)
  }

  public fetchCountries = (
    params: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<string>>> => {
    return this.httpConnector.get('/studios/countries', {
      params,
    })
  }

  public fetchCities = (params: Nullable<Partial<PaginationParamsDTO>>): Promise<AxiosResponse<Pagination<string>>> => {
    return this.httpConnector.get('/studios/cities', {
      params,
    })
  }

  public searchAddress = (params: Nullable<string>): Promise<AxiosResponse<string>> => {
    return this.httpConnector.get('/studios/cities', {
      params,
    })
  }
}
