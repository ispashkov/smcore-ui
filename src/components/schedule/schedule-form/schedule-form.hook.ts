import * as React from 'react'
import { FormInstance } from 'antd'

import { Days } from '../../../types/days.types'
import {
  genScheduleFormDirectionValidationRules,
  genScheduleFormDateValidationRules,
  genScheduleFormTypeValidationRules,
  genScheduleFormInitialValues,
  genScheduleFormIsValid,
} from './schedule-form.utils'
import { ScheduleFormValues } from './schedule-form.types'

type UseScheduleFormProps = {
  form: FormInstance<ScheduleFormValues>
  onFieldsChange: (isValid: boolean) => void
}

export function useScheduleForm(props: UseScheduleFormProps) {
  const { form, onFieldsChange } = props

  const [currentDay, setCurrentDay] = React.useState<Days>(Days.MONDAY)

  const initialValues = React.useMemo(genScheduleFormInitialValues, [])

  const directionValidationRules = React.useMemo(genScheduleFormDirectionValidationRules, [])
  const typeValidationRules = React.useMemo(genScheduleFormTypeValidationRules, [])
  const dateValidationRules = React.useMemo(genScheduleFormDateValidationRules, [])

  const timeRangePlaceholder = React.useMemo<[string, string]>(() => ['Начать с', 'Повторять до'], [])

  const onCopyHandler = React.useCallback(
    (day: Days): void => {
      const values = form.getFieldsValue()
      const { slots } = values

      form.setFieldsValue({
        ...values,
        slots: {
          ...slots,
          [currentDay]: slots[day],
        },
      })
    },
    [currentDay, form]
  )

  const onFieldsChangeHandler = React.useCallback((): void => {
    const isValid = genScheduleFormIsValid(form)
    onFieldsChange(isValid)
  }, [form, onFieldsChange])

  return {
    currentDay,
    setCurrentDay,

    initialValues,

    directionValidationRules,
    typeValidationRules,
    dateValidationRules,

    timeRangePlaceholder,

    onCopyHandler,
    onFieldsChangeHandler,
  }
}
