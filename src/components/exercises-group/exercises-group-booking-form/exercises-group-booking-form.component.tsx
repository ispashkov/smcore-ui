import * as React from 'react'
import { Form, Select } from 'antd'

import { ClientsAutocompleteContainer } from '../../../containers/clients-autocomplete/clients-autocomplete.container'
import { useExercisesGroupBookingForm } from './exercises-group-booking-form.hook'
import { ExercisesGroupBookingFormProps } from './exercises-group-booking-form.types'

export const ExercisesGroupBookingForm: React.FC<ExercisesGroupBookingFormProps> = props => {
  const { form, loading } = props
  const { placesOptions, paymentTypesOptions } = props

  const { phoneValidationRules, placeValidationRules, paymentTypeValidationRules } = useExercisesGroupBookingForm()

  return (
    <Form form={form} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} autoComplete="off" layout="vertical">
      <Form.Item label="Номер телефона" name="phone" rules={phoneValidationRules}>
        <ClientsAutocompleteContainer name="phone" form={form} disabled={loading} />
      </Form.Item>

      <Form.Item label="Место" name="place" rules={placeValidationRules}>
        <Select placeholder="Место" options={placesOptions} disabled={loading} loading={loading} />
      </Form.Item>

      <Form.Item label="Способ оплаты" name="paymentType" rules={paymentTypeValidationRules}>
        <Select placeholder="Способ оплаты" options={paymentTypesOptions} disabled={loading} loading={loading} />
      </Form.Item>
    </Form>
  )
}
