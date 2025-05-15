import { ExercisesTimetableApi } from '../../../../api/types/exercises-timetable-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { Nullable } from '../../../../types/lang.types'

export type ScheduleManagementPageListFetchPageDataSuccessPayload = {
  exercisesTimetable: Nullable<ExercisesTimetableApi.ExercisesTimetable[]>
  studiosRooms: Nullable<StudiosRoomsApi.StudioRoom[]>
}
