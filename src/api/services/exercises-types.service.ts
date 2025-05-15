import { AxiosResponse } from 'axios'

import { HttpConnector } from '../connectors/http.connector'
import { Nullable } from '../../types/lang.types'
import { Pagination } from '../types/api.types'
import { ExercisesTypesApi } from '../types/exercises-types-api.types'

export class ExercisesTypesService {
  constructor(private readonly httpConnector: HttpConnector) {}

  public create = (data: ExercisesTypesApi.ExerciseTypeDTO): Promise<AxiosResponse<ExercisesTypesApi.ExerciseType>> => {
    return this.httpConnector.post<ExercisesTypesApi.ExerciseType>('/exercises/types', data)
  }

  public fetchAll = (
    params: Nullable<Partial<ExercisesTypesApi.ExerciseTypesFetchAllParams>>
  ): Promise<AxiosResponse<Pagination<ExercisesTypesApi.ExerciseType>>> => {
    return this.httpConnector.get<Pagination<ExercisesTypesApi.ExerciseType>>('/exercises/types', {
      params,
    })
  }

  public fetchById = (id: string): Promise<AxiosResponse<ExercisesTypesApi.ExerciseType>> => {
    return this.httpConnector.get<ExercisesTypesApi.ExerciseType>(`/exercises/types/${id}`)
  }

  public update = (
    id: string,
    data: ExercisesTypesApi.ExerciseTypeDTO
  ): Promise<AxiosResponse<ExercisesTypesApi.ExerciseType>> => {
    return this.httpConnector.patch<ExercisesTypesApi.ExerciseType>(`/exercises/types/${id}`, data)
  }

  public remove = (id: string): Promise<void> => {
    return this.httpConnector.delete(`/exercises/types/${id}`)
  }
}
