import { Nullable } from '../../types/lang.types'
import { ExercisesDirectionsApi } from './exercises-directions-api.types'
import { Rate } from './api.types'

export namespace StudiosRoomsApi {
  import ExerciseDirection = ExercisesDirectionsApi.ExerciseDirection

  export interface StudioRoom {
    id: string
    name: string
    totalCapacity: number
    mainPhoto: string
    studioId: string
    orgId: string
    directions: Nullable<ExerciseDirection[]>
    directionsCount: number
    rates: Nullable<Rate[]>
    color: string
  }

  export interface StudioRoomDTO {
    id?: string
    name: string
    totalCapacity: number
    mainPhoto?: string
    directionsIds: number[] | string[]
    rates?: Rate[]
  }
}
