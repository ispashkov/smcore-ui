export interface ProductsServicesTableActions {
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}

export interface ProductsServicesTableRow {
  id: string
  name: string
  availableStudios: number
  cost: number
  trialCost: number
}
