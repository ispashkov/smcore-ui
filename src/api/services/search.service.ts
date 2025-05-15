import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { SearchApi } from '../types/search-api.types'

export class SearchService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public fetchProducts = (params: SearchApi.SearchParams): Promise<AxiosResponse<SearchApi.SearchItem[]>> => {
    return this.httpConnector.get<SearchApi.SearchItem[]>('/search/products', { params })
  }

  public fetchEmployees = (params: SearchApi.SearchParams): Promise<AxiosResponse<SearchApi.SearchItem[]>> => {
    return this.httpConnector.get<SearchApi.SearchItem[]>('/search/employees', { params })
  }

  public fetchClients = (params: SearchApi.SearchParams): Promise<AxiosResponse<SearchApi.SearchItem[]>> => {
    return this.httpConnector.get<SearchApi.SearchItem[]>('/search/clients', { params })
  }
}
