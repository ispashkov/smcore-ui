import { DefaultOptionType } from 'antd/lib/select'

import { OrganizationsApi } from '../api/types/organizations-api.types'
import { FranchisesTableRow } from '../components/franchises/franchises-table/franchises-table.types'
import { FranchisesFormValues } from '../components/franchises/franchises-form/franchises-form.types'
import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'

export function mapFranchisesToFranchisesTableRowList(
  organizations: Nullable<OrganizationsApi.Organization[]>
): Nullable<FranchisesTableRow[]> {
  if (isDefAndNotEmpty(organizations)) {
    return organizations.map(
      (organization: OrganizationsApi.Organization): FranchisesTableRow => ({
        id: organization.id,
        name: organization.name,
        customerName: organization.customerName,
        email: organization.email,
        phone: organization.phone,
        studiosCount: organization.studiosCount,
      })
    )
  }

  return null
}

export function genOrganizationDTO(data: FranchisesFormValues): OrganizationsApi.OrganizationDTO {
  return {
    name: data.name,
    /**
     * @todo Should be passed from UI
     */
    franchise: false,
    customerName: data.customerName,
    email: data.email,
    phone: data.phone,
  }
}

export function genFranchiseFormValues(data: Nullable<OrganizationsApi.Organization>): Nullable<FranchisesFormValues> {
  if (isDef(data)) {
    return {
      name: data.name,
      customerName: data.customerName,
      email: data.email || '',
      phone: data.phone || '',
    }
  }

  return null
}

export function mapFranchisesToOptions(
  franchises: Nullable<OrganizationsApi.Organization[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(franchises)) {
    return franchises.map(
      (franchise: OrganizationsApi.Organization): DefaultOptionType => ({
        value: franchise.id,
        label: franchise.name,
      })
    )
  }
}
