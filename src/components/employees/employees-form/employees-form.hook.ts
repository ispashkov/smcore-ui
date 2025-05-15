import * as React from 'react'

import { genEmployeesFormEmailValidationRules, genEmployeesFormPhoneValidationRules } from './employees-form.utils'

export function useEmployeesForm() {
  const phoneValidationRules = React.useMemo(genEmployeesFormPhoneValidationRules, [])
  const emailValidationRules = React.useMemo(genEmployeesFormEmailValidationRules, [])

  return {
    phoneValidationRules,
    emailValidationRules,
  }
}
