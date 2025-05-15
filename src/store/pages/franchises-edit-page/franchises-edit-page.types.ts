import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { FranchisesFormValues } from '../../../components/franchises/franchises-form/franchises-form.types'

export type FranchisesEditPageDataSuccessPayload = {
  franchise: Nullable<OrganizationsApi.Organization>
  customers: Nullable<Pagination<EmployeesApi.Employee>>
}

export type FranchiseEditPageUpdateFranchisePayload = {
  id: string
  data: FranchisesFormValues
}
