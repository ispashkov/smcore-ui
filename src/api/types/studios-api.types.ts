import { NNumber, NString, Nullable } from '../../types/lang.types'
import { PaginationParamsDTO, WorkTime } from './api.types'
import { StudiosRoomsApi } from './studios-rooms-api.types'
import { ExercisesDirectionsApi } from './exercises-directions-api.types'
import { OrganizationsApi } from './organizations-api.types'

export namespace StudiosApi {
  import StudioRoomCreateDTO = StudiosRoomsApi.StudioRoomDTO
  import StudioRoom = StudiosRoomsApi.StudioRoom
  import ExerciseDirection = ExercisesDirectionsApi.ExerciseDirection
  import Organization = OrganizationsApi.Organization

  export interface Studio {
    id: string
    name: string
    country: string
    city: string
    address: string
    description: string
    schedule: string
    mainPhoto: string
    offset: number
    organization: Nullable<Organization>
    rooms: Nullable<StudioRoom[]>
    directions: Nullable<ExerciseDirection[]>
    directionsCount: number
    photos: Nullable<string[]>
    workTime: Nullable<WorkTime>
    minRate: number
    girlsOnly: boolean
  }

  export interface StudioCreateDTO {
    name: string
    country: string
    city: string
    address: string
    description: string
    mainPhoto: string
    orgId: string | number
    rooms: StudioRoomCreateDTO[]
    photos: Array<string>
    workTime: WorkTime
    minRate: number
    girlsOnly: boolean
  }

  export interface StudioUpdateDTO {
    name: string
    country: string
    city: string
    address: string
    description: string
    mainPhoto: string
    photos: Array<string>
    workTime: WorkTime
    minRate: number
    girlsOnly: boolean
  }

  export interface StudiosFetchAllParams extends PaginationParamsDTO {
    name?: NString
    country?: NString
    city?: NString
    orgId?: NString
    directions?: NNumber
  }
}
