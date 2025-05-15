import { NNumber, NString, Nullable } from '../../../types/lang.types'
import { WorkTime } from '../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'

import ExerciseDirection = ExercisesDirectionsApi.ExerciseDirection

export interface StudiosTableRow {
  id: string
  name: string
  country: NString
  city: NString
  address: NString
  description: NString
  schedule: NString
  mainPhoto: NString
  offset: NNumber
  organization: string | undefined
  rooms: number | undefined
  directions: Nullable<ExerciseDirection[]>
  directionsCount: NNumber
  photos: Nullable<string[]>
  workTime: Nullable<WorkTime>
}

export interface StudiosTableActions {
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}
