import * as React from 'react'
import { Form, Select } from 'antd'

import { InputTimeRange } from '../../controls/input-time-range/input-time-range.component'
import { InputTimeRangeValue } from '../../controls/input-time-range/input-time-range.types'
import { useExercisesForm } from './exercises-form.hook'
import { ExercisesFormProps } from './exercises-form.types'
import './exercises-form.styles.less'

export const ExercisesForm: React.FC<ExercisesFormProps> = props => {
  const { form, loading } = props
  const { directionsOptions, exercisesTypesOptions, trainersOptions } = props
  const { directionIsDisabled = false, exercisesTypeIsDisabled = false } = props

  const {
    directionValidationRules,
    timeFromValidationRules,
    typeValidationRules,
    trainersValidationRules,
    timeRangePlaceholder,
  } = useExercisesForm()

  const onChangeTimeHandler = React.useCallback(
    (value: InputTimeRangeValue): void => {
      const values = form.getFieldsValue()

      form.setFieldsValue({
        ...values,
        time: value,
      })
    },
    [form]
  )

  return (
    <Form form={form} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} autoComplete="off" layout="vertical">
      <Form.Item label="Направление" name="direction" rules={directionValidationRules}>
        <Select
          placeholder="Направление"
          options={directionsOptions}
          disabled={directionIsDisabled || loading}
          loading={loading}
        />
      </Form.Item>

      <Form.Item label="Время начала и окончания" name="time" rules={timeFromValidationRules}>
        <InputTimeRange
          value={form.getFieldValue('time')}
          placeholder={timeRangePlaceholder}
          onChange={onChangeTimeHandler}
        />
      </Form.Item>

      <Form.Item className="exercises-form__type" label="Тип тренировки" name="type" rules={typeValidationRules}>
        <Select
          placeholder="Тип тренировки"
          options={exercisesTypesOptions}
          disabled={exercisesTypeIsDisabled || loading}
          loading={loading}
        />
      </Form.Item>

      <Form.Item label="Тренеры" name="trainers" rules={trainersValidationRules}>
        <Select mode="multiple" placeholder="Тренеры" options={trainersOptions} disabled={loading} loading={loading} />
      </Form.Item>
    </Form>
  )
}
