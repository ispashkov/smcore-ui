import { Rule } from 'antd/lib/form'

export function genScheduleFormSlotItemTimeValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите время начала и окончания' }]
}

export function genExercisesFormSlotItemRoomValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите зал' }]
}

export function genExercisesFormSlotItemTrainersValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите тренера' }]
}
