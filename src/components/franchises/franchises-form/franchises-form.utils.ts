import { Rule } from 'antd/lib/form'

export function genFranchisesFormPhoneValidationRules(): Rule[] {
  return [{ required: true, message: 'Введите номер телефона' }]
}

export function genFranchisesFormEmailValidationRules(): Rule[] {
  return [
    { required: true, message: 'Введите email' },
    {
      type: 'email',
      message: 'поле должно соответствовать типу: example@exmaple.com',
    },
  ]
}

export function genFranchisesFormCustomerNameValidationRules(): Rule[] {
  return [
    { required: true, message: 'Введите ФИО владельца' },
    { min: 3, message: 'Минимум 3 символа' },
  ]
}
