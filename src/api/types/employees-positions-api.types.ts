import { PaginationParamsDTO } from './api.types'

export namespace EmployeesPositionsApi {
  export interface EmployeePosition {
    id: number
    name: string
  }

  export interface EmployeePositionDTO {
    name: string
  }

  export interface EmployeesPositionsFetchAllParams extends PaginationParamsDTO {
    name: string
  }
}
