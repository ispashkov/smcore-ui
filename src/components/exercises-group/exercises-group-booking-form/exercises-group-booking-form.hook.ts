import * as React from 'react'

import {
  genExercisesGroupBookingFormPhoneValidationRules,
  genExercisesGroupBookingFormPlaceValidationRules,
  genExercisesGroupBookingFormPaymentTypeValidationRules,
} from './exercises-group-booking-form.utils'

export function useExercisesGroupBookingForm() {
  const phoneValidationRules = React.useMemo(genExercisesGroupBookingFormPhoneValidationRules, [])
  const placeValidationRules = React.useMemo(genExercisesGroupBookingFormPlaceValidationRules, [])
  const paymentTypeValidationRules = React.useMemo(genExercisesGroupBookingFormPaymentTypeValidationRules, [])

  return {
    phoneValidationRules,
    placeValidationRules,
    paymentTypeValidationRules,
  }
}
