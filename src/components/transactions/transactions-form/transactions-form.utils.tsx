import { Rule } from 'antd/lib/form'

export function genTransactionsFormPhoneValidationRules(): Rule[] {
  return [{ required: true, message: 'Введите номер телефона' }]
}

export function genTransactionsFormPaymentMethodValidationRules(): Rule[] {
  return [{ required: true, message: 'Выберите способ оплаты' }]
}
