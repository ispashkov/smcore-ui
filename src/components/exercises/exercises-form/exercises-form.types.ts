import { FormInstance } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'

export interface ExercisesFormProps {
  form: FormInstance<ExercisesFormValues>
  loading: boolean
  directionsOptions?: DefaultOptionType[]
  exercisesTypesOptions?: DefaultOptionType[]
  trainersOptions?: DefaultOptionType[]
  directionIsDisabled?: boolean
  exercisesTypeIsDisabled?: boolean
}

export type ExercisesFormValues = ExercisesFormValuesBase<string>

export type ExercisesFormValuesDTO = ExercisesFormValuesBase<string>

interface ExercisesFormValuesBase<Time> {
  direction: number
  time: [Time | null, Time | null]
  type: number
  trainers: string[]
}
