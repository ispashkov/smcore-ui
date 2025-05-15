export interface DirectionsTableRow {
  id: number
  name: string
  description: string
  whatToTake: string
  photo: string
}

export interface DirectionsTableActions {
  onEdit: (id: number) => void
  onRemove: (id: number) => void
}
