import { PaginationParamsDTO } from './api.types'

export namespace ExercisesTypesApi {
  export interface ExerciseType {
    id: number
    name: string
    description: string
    capacity: number
  }

  export interface ExerciseTypeDTO {
    name: string
    description: string
    capacity: number
  }

  export interface ExerciseTypesFetchAllParams extends PaginationParamsDTO {
    name: string
  }
}
