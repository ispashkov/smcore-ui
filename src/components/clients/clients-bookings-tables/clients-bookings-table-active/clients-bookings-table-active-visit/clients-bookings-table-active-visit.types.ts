export interface ClientsBookingsTableActiveVisitEvents {
  onVisit: (bookingId: string, exerciseId: string, checked: boolean) => void
}
