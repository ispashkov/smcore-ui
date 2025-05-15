import { NString, Nullable } from '../../../types/lang.types'
import { ClientsCategoriesApi } from '../../../api/types/clients-categories-api.types'

export interface ClientsTableRow {
  id: string
  photo: NString
  name: string
  phone: string
  loyaltyCard: string
  lastVisit: string
  clientCategory: Nullable<ClientsCategoriesApi.ClientCategory>
}

export interface ClientsTableActions {
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}
