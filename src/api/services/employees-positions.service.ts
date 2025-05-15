import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination } from '../types/api.types'
import { EmployeesPositionsApi } from '../types/employees-positions-api.types'

export class EmployeesPositionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: EmployeesPositionsApi.EmployeePositionDTO
  ): Promise<AxiosResponse<EmployeesPositionsApi.EmployeePosition>> => {
    return this.httpConnector.post<EmployeesPositionsApi.EmployeePosition>('/employees/positions', data)
  }

  public fetchAll = (
    params: Nullable<Partial<EmployeesPositionsApi.EmployeesPositionsFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<EmployeesPositionsApi.EmployeePosition>>> => {
    return this.httpConnector.get<Pagination<EmployeesPositionsApi.EmployeePosition>>('/employees/positions', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<EmployeesPositionsApi.EmployeePosition>> => {
    return this.httpConnector.get<EmployeesPositionsApi.EmployeePosition>(`/employees/positions/${id}`)
  }

  public update = (
    id: string,
    data: EmployeesPositionsApi.EmployeePositionDTO
  ): Promise<AxiosResponse<EmployeesPositionsApi.EmployeePosition>> => {
    return this.httpConnector.patch<EmployeesPositionsApi.EmployeePosition>(`/employees/positions/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/employees/positions/${id}`)
  }
}
