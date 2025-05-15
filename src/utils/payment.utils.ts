import { DefaultOptionType } from 'antd/lib/select'

import { PaymentMethod, PaymentType } from '../types/payment.types'
import { formatPaymentType } from '../format/text.format'
import { isDef } from '../types/lang.types'
import { validateStrEnumValue } from './enum.utils'

export function genPaymentTypesOptions(): DefaultOptionType[] {
  return Object.keys(PaymentType).reduce<DefaultOptionType[]>((acc: DefaultOptionType[], key: string) => {
    const paymentType = validateStrEnumValue<PaymentType>(PaymentType, key)

    if (isDef(paymentType)) {
      acc.push({
        value: paymentType,
        label: formatPaymentType(paymentType),
      })
    }

    return acc
  }, [])
}

export function genPaymentMethodsList(): PaymentMethod[] {
  return Object.keys(PaymentMethod).reduce<PaymentMethod[]>((acc: PaymentMethod[], key: string) => {
    const paymentMethod = validateStrEnumValue<PaymentMethod>(PaymentMethod, key)

    if (isDef(paymentMethod)) {
      acc.push(paymentMethod)
    }

    return acc
  }, [])
}
