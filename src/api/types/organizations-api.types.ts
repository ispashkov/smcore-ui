import { NString } from '../../types/lang.types'

export namespace OrganizationsApi {
  export interface Organization {
    id: string
    name: string
    franchise: boolean
    customerName: string
    email: NString
    phone: NString
    studiosCount: number
  }

  export interface OrganizationDTO {
    name: string
    franchise: boolean
    customerName: string
    email: string
    phone: string
  }
}
