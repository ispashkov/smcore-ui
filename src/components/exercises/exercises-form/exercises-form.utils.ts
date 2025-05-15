import { Rule } from 'antd/lib/form'
import moment from 'moment/moment'

import { ExercisesFormValues, ExercisesFormValuesDTO } from './exercises-form.types'
import { isDef } from '../../../types/lang.types'
import { genDefaultTimeFormat } from '../../../format/date.format'

export function genExercisesFormDirectionValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите направление' }]
}

export function genExercisesFormTimeFromValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите время начала' }]
}

export function genExercisesFormTimeToValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите время окончания' }]
}

export function genExercisesFormTypeValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите тип тренировки' }]
}

export function genExercisesFormTrainersValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите тренера' }]
}

export function genExercisesFormValuesDTO(values: ExercisesFormValues, studioOffset: number): ExercisesFormValuesDTO {
  const { time, direction, type, trainers } = values
  const [timeFrom, timeTo] = time

  return {
    direction,
    type,
    trainers,
    time: [
      isDef(timeFrom) ? moment(timeFrom, genDefaultTimeFormat()).utcOffset(studioOffset, true).format() : null,
      isDef(timeTo) ? moment(timeTo, genDefaultTimeFormat()).utcOffset(studioOffset, true).format() : null,
    ],
  }
}
