import { DefaultOptionType } from 'antd/lib/select'

import { ExercisesTypesApi } from '../api/types/exercises-types-api.types'
import { isDefAndNotEmpty, Nullable } from '../types/lang.types'

export function mapExercisesTypesToOptions(
  exercisesTypes: Nullable<ExercisesTypesApi.ExerciseType[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(exercisesTypes)) {
    return exercisesTypes.map((exerciseType: ExercisesTypesApi.ExerciseType) => ({
      value: exerciseType.id,
      label: exerciseType.name,
    }))
  }
}
