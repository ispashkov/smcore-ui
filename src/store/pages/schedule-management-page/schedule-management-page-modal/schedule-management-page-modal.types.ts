import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../../api/types/exercises-types-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { TrainersApi } from '../../../../api/types/trainers-api.types'

export type ScheduleManagementPageModalFetchDictionariesSuccessPayload = {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercisesTypes: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  studiosRooms: Nullable<Pagination<StudiosRoomsApi.StudioRoom>>
  trainers: Nullable<Pagination<TrainersApi.Trainer>>
}
