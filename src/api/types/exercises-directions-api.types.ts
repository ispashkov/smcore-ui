export namespace ExercisesDirectionsApi {
  export interface ExerciseDirection {
    id: number
    name: string
    description: string
    photo: string
    whatToTake: string
  }

  export interface ExerciseDirectionDTO {
    name: string
    description: string
    photo: string
    whatToTake: string
  }
}
