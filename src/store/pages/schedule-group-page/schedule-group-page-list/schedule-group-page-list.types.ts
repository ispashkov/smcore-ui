import { ScheduleGroupPageQueryParams } from '../../../../pages/schedule-group-page/schedule-group-page.types'

export interface ScheduleGroupPageListFetchBookingsPayload {
  id: string
  params: ScheduleGroupPageQueryParams
}

export type ScheduleGroupPageListFetchPageDataPayload = ScheduleGroupPageListFetchBookingsPayload

export interface ScheduleGroupPageListCancelBookingPayload {
  exerciseId: string
  bookingId: string
  reason: string
}

export interface ScheduleGroupPageListChangeBookingVisitingConfirmationPayload {
  exerciseId: string
  bookingId: string
  confirm: boolean
}

export interface ScheduleGroupPageListFetchClientsInWaitingListPayload {
  exerciseId: string
}
