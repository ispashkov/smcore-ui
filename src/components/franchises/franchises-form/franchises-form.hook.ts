import * as React from 'react'

import {
  genFranchisesFormCustomerNameValidationRules,
  genFranchisesFormEmailValidationRules,
  genFranchisesFormPhoneValidationRules,
} from './franchises-form.utils'

export function useFranchisesForm() {
  const phoneValidationRules = React.useMemo(genFranchisesFormPhoneValidationRules, [])
  const emailValidationRules = React.useMemo(genFranchisesFormEmailValidationRules, [])
  const customerNameValidationRules = React.useMemo(genFranchisesFormCustomerNameValidationRules, [])

  return {
    phoneValidationRules,
    emailValidationRules,
    customerNameValidationRules,
  }
}
