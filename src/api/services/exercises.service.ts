import { AxiosResponse } from 'axios'

import { Nullable } from '../../types/lang.types'
import { HttpConnector } from '../connectors/http.connector'
import { Pagination } from '../types/api.types'
import { ExercisesApi } from '../types/exercises-api.types'

export class ExercisesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ExercisesApi.ExercisesCreateDTO
  ): Promise<AxiosResponse<ExercisesApi.ExerciseCreateResult>> => {
    return this.httpConnector.post<ExercisesApi.ExerciseCreateResult>('/exercises', data)
  }

  public fetchAll = (
    params?: Nullable<ExercisesApi.ExercisesFetchAllParams>
  ): Promise<AxiosResponse<ExercisesApi.Exercise[]>> => {
    return this.httpConnector.get<ExercisesApi.Exercise[]>('/exercises', { params })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ExercisesApi.Exercise>> => {
    return this.httpConnector.get<ExercisesApi.Exercise>(`/exercises/${id}`)
  }

  public update = (id: string, data: ExercisesApi.ExerciseUpdateDTO): Promise<AxiosResponse<ExercisesApi.Exercise>> => {
    return this.httpConnector.patch(`/exercises/${id}`, data)
  }

  public cancel = (id: string): Promise<AxiosResponse<void>> => {
    return this.httpConnector.delete<void>(`/exercises/${id}`)
  }

  public createBooking = (
    id: string,
    data: ExercisesApi.ExerciseBookingCreateDTO
  ): Promise<AxiosResponse<Pagination<ExercisesApi.ExerciseBooking>>> => {
    return this.httpConnector.post<Pagination<ExercisesApi.ExerciseBooking>>(`/exercises/${id}/bookings`, data)
  }

  public fetchBookings = (
    id: string,
    params?: Nullable<Partial<ExercisesApi.FetchBookingsParams>>
  ): Promise<AxiosResponse<Pagination<ExercisesApi.ExerciseBooking>>> => {
    return this.httpConnector.get<Pagination<ExercisesApi.ExerciseBooking>>(`/exercises/${id}/bookings`, {
      params,
    })
  }

  public cancelBooking = (
    exerciseId: string,
    bookingId: string,
    data: ExercisesApi.ExerciseBookingCancelDTO
  ): Promise<AxiosResponse<ExercisesApi.ExerciseBooking>> => {
    return this.httpConnector.delete<ExercisesApi.ExerciseBooking>(`/exercises/${exerciseId}/bookings/${bookingId}`, {
      data,
    })
  }

  public createBookingComment = (
    exerciseId: string,
    bookingId: string,
    data: ExercisesApi.ExerciseBookingCommentDTO
  ): Promise<AxiosResponse<Pagination<ExercisesApi.ExerciseBookingComment>>> => {
    return this.httpConnector.post<Pagination<string>>(`/exercises/${exerciseId}/bookings/${bookingId}/comments`, data)
  }

  public fetchBookingComments = (
    exerciseId: string,
    bookingId: string
  ): Promise<AxiosResponse<Pagination<ExercisesApi.ExerciseBookingComment>>> => {
    return this.httpConnector.get<Pagination<ExercisesApi.ExerciseBookingComment>>(
      `/exercises/${exerciseId}/bookings/${bookingId}/comments`
    )
  }

  public fetchSpots = (exerciseId: string): Promise<AxiosResponse<ExercisesApi.ExerciseSpot[]>> => {
    return this.httpConnector.get<ExercisesApi.ExerciseSpot[]>(`/exercises/${exerciseId}/spots`)
  }

  public confirmBookingVisiting = (
    exerciseId: string,
    bookingId: string
  ): Promise<AxiosResponse<ExercisesApi.Exercise>> => {
    return this.httpConnector.put<ExercisesApi.Exercise>(`/exercises/${exerciseId}/bookings/${bookingId}/confirmed`)
  }

  public cancelConfirmBookingVisiting = (
    exerciseId: string,
    bookingId: string
  ): Promise<AxiosResponse<ExercisesApi.Exercise>> => {
    return this.httpConnector.delete<ExercisesApi.Exercise>(`/exercises/${exerciseId}/bookings/${bookingId}/confirmed`)
  }

  public fetchWaitingList = (
    id: string,
    params?: Nullable<Partial<ExercisesApi.FetchWaitListParams>>
  ): Promise<AxiosResponse<Pagination<ExercisesApi.ExerciseWaitListItem>>> => {
    return this.httpConnector.get<Pagination<ExercisesApi.ExerciseWaitListItem>>(`/exercises/${id}/waitlist`, {
      params,
    })
  }
}
