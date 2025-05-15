import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { Nullable } from '../../../../types/lang.types'

export interface SchedulePageListFetchPageDataSuccessPayload {
  exercises: Nullable<ExercisesApi.Exercise[]>
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
}
