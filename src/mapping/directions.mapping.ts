import { DefaultOptionType } from 'antd/lib/select'

import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ExercisesDirectionsApi } from '../api/types/exercises-directions-api.types'
import { DirectionsTableRow } from '../components/directions/directions-table/directions-table.types'
import { DirectionsFormValues } from '../components/directions/directions-form/directions-form.types'

export function mapDirectionsToDirectionsTableRowList(
  directions: Nullable<ExercisesDirectionsApi.ExerciseDirection[]>
): Nullable<DirectionsTableRow[]> {
  if (isDefAndNotEmpty(directions)) {
    return directions.map((direction: ExercisesDirectionsApi.ExerciseDirection) => ({
      id: direction.id,
      name: direction.name,
      description: direction.description,
      whatToTake: direction.whatToTake,
      photo: direction.photo,
    }))
  }

  return null
}

export function mapDirectionsToOptions(
  directions: Nullable<ExercisesDirectionsApi.ExerciseDirection[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(directions)) {
    return directions.map((direction: ExercisesDirectionsApi.ExerciseDirection) => ({
      value: direction.id,
      label: direction.name,
    }))
  }
}

export function genDirectionsFormValues(
  data: Nullable<ExercisesDirectionsApi.ExerciseDirection>
): Nullable<DirectionsFormValues> {
  if (isDef(data)) {
    return {
      name: data.name,
      description: data.description,
      whatToTake: data.whatToTake,
      photo: data.photo,
    }
  }

  return null
}

export function genDirectionDTO(data: DirectionsFormValues): ExercisesDirectionsApi.ExerciseDirectionDTO {
  return {
    name: data.name,
    description: data.description,
    whatToTake: data.whatToTake,
    photo: data.photo,
  }
}
