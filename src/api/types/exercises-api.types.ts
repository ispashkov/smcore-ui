import { NBoolean, NString, Nullable } from '../../types/lang.types'
import { ColoredDictionaryItem, DictionaryItem, PaginationParamsDTO, PaymentType } from './api.types'
import { ClientsApi } from './clients-api.types'

export namespace ExercisesApi {
  export interface ExercisesCreateDTO {
    direction: number
    type: number
    timeFrom: string
    timeTo: string
    room: string
    trainers: string[]
  }

  export interface ExerciseCreateResult {
    id: string
    direction: Nullable<DictionaryItem<number>>
    type: Nullable<DictionaryItem<number>>
    timeFrom: string
    timeTo: string
    room: ColoredDictionaryItem
  }

  export interface Exercise {
    id: string
    direction: Nullable<DictionaryItem<number>>
    type: Nullable<DictionaryItem<number>>
    timeFrom: string
    timeTo: string
    room: ColoredDictionaryItem
    trainers: Nullable<DictionaryItem[]>
    clientsCount: number
    maxClientsCount: number
    canceled: boolean
  }

  export interface ExerciseUpdateDTO {
    timeFrom: string
    timeTo: string
    room: string
    trainers: string[]
  }

  export interface ExercisesFetchAllParams {
    studioId: string
    roomId?: NString
    date?: NString
    includeCompleted?: NBoolean
    includeAvailableSlots?: NBoolean
  }

  export interface ExerciseBookingCreateDTO {
    phone: string
    spot: ExercisesApi.ExerciseSpot
    paymentType: PaymentType
  }

  export type ExerciseBookingClient = ClientsApi.Client

  export interface FetchBookingsParams extends PaginationParamsDTO {}

  export type ExerciseSpot = number

  export interface ExerciseBooking {
    id: string
    client: ExerciseBookingClient
    paymentType: PaymentType
    cancellationReason: NString
    cancellationDate: NString
    visitConfirmed: boolean
    cancelled: boolean
    spot: ExerciseSpot
  }

  export interface ExerciseBookingCancelDTO {
    cancellationReason: string
  }

  export interface ExerciseBookingCommentDTO {
    comment: string
  }

  export type ExerciseBookingComment = string

  export interface ExerciseWaitListClient {
    id: string
    email: NString
    firstName: NString
    lastName: NString
    middleName: NString
    photo: NString
    phone: NString
  }

  export interface ExerciseWaitListItem {
    id: string
    client: Nullable<ExerciseWaitListClient>
  }

  export interface FetchWaitListParams extends PaginationParamsDTO {
    search: string
  }
}
