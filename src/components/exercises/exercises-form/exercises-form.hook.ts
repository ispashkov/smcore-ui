import * as React from 'react'

import {
  genExercisesFormDirectionValidationRules,
  genExercisesFormTimeFromValidationRules,
  genExercisesFormTimeToValidationRules,
  genExercisesFormTypeValidationRules,
  genExercisesFormTrainersValidationRules,
} from './exercises-form.utils'

export function useExercisesForm() {
  const directionValidationRules = React.useMemo(genExercisesFormDirectionValidationRules, [])
  const timeFromValidationRules = React.useMemo(genExercisesFormTimeFromValidationRules, [])
  const timeToValidationRules = React.useMemo(genExercisesFormTimeToValidationRules, [])
  const typeValidationRules = React.useMemo(genExercisesFormTypeValidationRules, [])
  const trainersValidationRules = React.useMemo(genExercisesFormTrainersValidationRules, [])

  const timeRangePlaceholder = React.useMemo<[string, string]>(() => ['Время начала', 'Время окончания'], [])

  return {
    directionValidationRules,
    timeFromValidationRules,
    timeToValidationRules,
    typeValidationRules,
    trainersValidationRules,

    timeRangePlaceholder,
  }
}
