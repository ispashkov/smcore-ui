export type ClientsEditPageBookingsActiveChangeBookingVisitingConfirmationPayload = {
  bookingId: string
  exerciseId: string
  confirm: boolean
}

export type ClientsEditPageBookingsActiveCancelBookingPayload = {
  exerciseId: string
  bookingId: string
  reason: string
}
