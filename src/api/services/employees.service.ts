import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination } from '../types/api.types'
import { EmployeesApi } from '../types/employees-api.types'

export class EmployeesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: EmployeesApi.EmployeeCreateDTO): Promise<AxiosResponse<EmployeesApi.Employee>> => {
    return this.httpConnector.post<EmployeesApi.Employee>('/employees', data)
  }

  public fetchAll = (
    params: Nullable<Partial<EmployeesApi.EmployeesFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<EmployeesApi.Employee>>> => {
    return this.httpConnector.get<Pagination<EmployeesApi.Employee>>('/employees', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<EmployeesApi.Employee>> => {
    return this.httpConnector.get<EmployeesApi.Employee>(`/employees/${id}`)
  }

  public update = (id: string, data: EmployeesApi.EmployeeCreateDTO): Promise<AxiosResponse<EmployeesApi.Employee>> => {
    return this.httpConnector.patch<EmployeesApi.Employee>(`/employees/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/employees/${id}`)
  }
}
