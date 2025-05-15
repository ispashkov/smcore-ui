import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { ExercisesTimetableApi } from '../types/exercises-timetable-api.types'
import { Nullable } from '../../types/lang.types'

export class ExercisesTimetableService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (
    data: ExercisesTimetableApi.ExercisesTimetableDTO
  ): Promise<AxiosResponse<ExercisesTimetableApi.ExercisesTimetable[]>> => {
    return this.httpConnector.post<ExercisesTimetableApi.ExercisesTimetable[]>('/exercises/timetable', data)
  }

  public fetchAll = (
    params?: Nullable<ExercisesTimetableApi.ExercisesTimetableFetchAllParams>
  ): Promise<AxiosResponse<ExercisesTimetableApi.ExercisesTimetable[]>> => {
    return this.httpConnector.get<ExercisesTimetableApi.ExercisesTimetable[]>('/exercises/timetable', { params })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ExercisesTimetableApi.ExercisesTimetable>> => {
    return this.httpConnector.get<ExercisesTimetableApi.ExercisesTimetable>(`/exercises/timetable/${id}`)
  }

  public update = (
    id: string,
    data: ExercisesTimetableApi.ExercisesTimetableDTO
  ): Promise<AxiosResponse<ExercisesTimetableApi.ExercisesTimetable>> => {
    return this.httpConnector.patch<ExercisesTimetableApi.ExercisesTimetable>(`/exercises/timetable/${id}`, data)
  }

  public cancel = (id: string): Promise<AxiosResponse<void>> => {
    return this.httpConnector.delete<void>(`/exercises/timetable/${id}`)
  }
}
