import { Nullable } from '../../../types/lang.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesPositionsApi } from '../../../api/types/employees-positions-api.types'

export type EmployeesCreatePageDataSuccessPayload = {
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  positions: Nullable<Pagination<EmployeesPositionsApi.EmployeePosition>>
}
