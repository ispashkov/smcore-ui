import { NString } from '../../../types/lang.types'

export interface EmployeesTableRow {
  id: string
  firstName: string
  middleName: string
  lastName: string
  birthDate: string
  photo: string
  phone: string
  email: string
  studiosCount?: number
  franchise: NString
  position: NString
}

export interface EmployeesTableActions {
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}
