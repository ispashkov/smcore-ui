import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination, PaginationParamsDTO } from '../types/api.types'
import { ExercisesDirectionsApi } from '../types/exercises-directions-api.types'

export class ExercisesDirectionsService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ExercisesDirectionsApi.ExerciseDirectionDTO
  ): Promise<AxiosResponse<ExercisesDirectionsApi.ExerciseDirection>> => {
    return this.httpConnector.post<ExercisesDirectionsApi.ExerciseDirection>('/exercises/directions', data)
  }

  public fetchAll = (
    params: Nullable<Partial<PaginationParamsDTO>>
  ): Promise<AxiosResponse<Pagination<ExercisesDirectionsApi.ExerciseDirection>>> => {
    return this.httpConnector.get<Pagination<ExercisesDirectionsApi.ExerciseDirection>>('/exercises/directions', {
      params,
    })
  }

  public fetchById = (id: number): Promise<AxiosResponse<ExercisesDirectionsApi.ExerciseDirection>> => {
    return this.httpConnector.get<ExercisesDirectionsApi.ExerciseDirection>(`/exercises/directions/${id}`)
  }

  public update = (
    id: number,
    data: ExercisesDirectionsApi.ExerciseDirectionDTO
  ): Promise<AxiosResponse<ExercisesDirectionsApi.ExerciseDirection>> => {
    return this.httpConnector.patch<ExercisesDirectionsApi.ExerciseDirection>(`/exercises/directions/${id}`, data)
  }

  public remove = (id: number): Promise<void> => {
    return this.httpConnector.delete(`/exercises/directions/${id}`)
  }
}
