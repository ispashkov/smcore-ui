import * as React from 'react'
import { Button, Modal } from 'antd'

import { ExercisesGroupBookingForm } from '../exercises-group-booking-form/exercises-group-booking-form.component'
import { ExercisesGroupBookingModalProps } from './exercises-group-booking-modal.types'

export const ExercisesGroupBookingModal: React.FC<ExercisesGroupBookingModalProps> = props => {
  const { form, placesOptions, paymentTypesOptions, loading } = props
  const { onCancel, onSave } = props

  const onSaveHandler = React.useCallback((): void => {
    const values = form.getFieldsValue()
    onSave(values)
  }, [form, onSave])

  return (
    <Modal
      title="Какого гостя записать?"
      open={true}
      onCancel={onCancel}
      footer={
        <Button type="primary" loading={loading} onClick={onSaveHandler}>
          Записать
        </Button>
      }
    >
      <ExercisesGroupBookingForm
        form={form}
        loading={loading}
        placesOptions={placesOptions}
        paymentTypesOptions={paymentTypesOptions}
      />
    </Modal>
  )
}
