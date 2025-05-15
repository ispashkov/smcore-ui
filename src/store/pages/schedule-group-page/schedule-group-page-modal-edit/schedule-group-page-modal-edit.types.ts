import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../../api/types/exercises-types-api.types'
import { TrainersApi } from '../../../../api/types/trainers-api.types'
import { ExercisesFormValuesDTO } from '../../../../components/exercises/exercises-form/exercises-form.types'

export type ScheduleGroupPageModalEditFetchDictionariesSuccessPayload = {
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercisesTypes: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  trainers: Nullable<Pagination<TrainersApi.Trainer>>
}

export type ScheduleGroupPageModalEditEditExercisePayload = {
  studioRoomId: string
  exerciseId: string
  exercisesFormValuesDTO: ExercisesFormValuesDTO
}
