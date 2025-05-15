export interface ClientsBookingsTableActiveActionsEvents {
  onBarcode: (bookingId: string, exerciseId: string) => void
  onCancel: (bookingId: string, exerciseId: string) => void
}
