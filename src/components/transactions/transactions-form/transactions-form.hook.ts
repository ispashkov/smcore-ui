import * as React from 'react'

import { genPaymentMethodsList } from '../../../utils/payment.utils'
import {
  genTransactionsFormPhoneValidationRules,
  genTransactionsFormPaymentMethodValidationRules,
} from './transactions-form.utils'

export function useTransactionsForm() {
  const paymentMethods = React.useMemo(genPaymentMethodsList, [])
  const phoneValidationRules = React.useMemo(genTransactionsFormPhoneValidationRules, [])
  const paymentMethodValidationRules = React.useMemo(genTransactionsFormPaymentMethodValidationRules, [])

  return {
    paymentMethods,
    phoneValidationRules,
    paymentMethodValidationRules,
  }
}
