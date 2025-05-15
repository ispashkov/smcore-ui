import { Rule } from 'antd/lib/form'

export function genExercisesGroupBookingFormPhoneValidationRules(): Rule[] {
  return [{ required: true, message: 'Введите номер телефона' }]
}

export function genExercisesGroupBookingFormPlaceValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите место' }]
}

export function genExercisesGroupBookingFormPaymentTypeValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите способ оплаты' }]
}
