import { Rule } from 'antd/lib/form'

import { EmployeesFormValues, EmployeesFormValuesDTO } from './employees-form.types'

export function genEmployeesFormPhoneValidationRules(): Rule[] {
  return [{ required: true, message: 'Введите номер телефона' }]
}

export function genEmployeesFormEmailValidationRules(): Rule[] {
  return [
    { required: true, message: 'Введите email' },
    {
      type: 'email',
      message: 'поле должно соответствовать виду: example@exmaple.com',
    },
  ]
}

export function genEmployeesUpdateFormValuesDTO(values: EmployeesFormValues): EmployeesFormValuesDTO {
  return {
    ...values,
    birthDate: values.birthDate.toISOString(),
  }
}
