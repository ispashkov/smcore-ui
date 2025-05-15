import { Nullable } from '../../../types/lang.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesPositionsApi } from '../../../api/types/employees-positions-api.types'
import { EmployeesFormValuesDTO } from '../../../components/employees/employees-form/employees-form.types'

export type EmployeesEditPageDataSuccessPayload = {
  employee: Nullable<EmployeesApi.Employee>
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  positions: Nullable<Pagination<EmployeesPositionsApi.EmployeePosition>>
}

export type EmployeesEditPageUpdateEmployeePayload = {
  id: string
  data: EmployeesFormValuesDTO
}
