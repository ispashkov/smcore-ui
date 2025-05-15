import { NNumber, NString } from '../../../types/lang.types'

export interface FranchisesTableRow {
  id: string
  name: string
  customerName: NString
  email: NString
  phone: NString
  studiosCount: NNumber
}

export interface FranchisesTableActions {
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}
