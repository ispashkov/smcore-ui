import * as React from 'react'

import { ExercisesGroupBookingModal } from '../../../components/exercises-group/exercises-group-booking-modal/exercises-group-booking-modal.component'
import { useScheduleGroupPageModalBooking } from './schedule-group-page-modal-booking.hook'
import { ScheduleGroupPageModalBookingProps } from './schedule-group-page-modal-booking.types'

export const ScheduleGroupPageModalBooking: React.FC<ScheduleGroupPageModalBookingProps> = props => {
  const { scheduleId, phone } = props

  const { form, loading, paymentTypesOptions, placesOptions, onSaveHandler, onCancelHandler } =
    useScheduleGroupPageModalBooking(scheduleId, phone)

  return (
    <ExercisesGroupBookingModal
      form={form}
      loading={loading}
      paymentTypesOptions={paymentTypesOptions}
      placesOptions={placesOptions}
      onSave={onSaveHandler}
      onCancel={onCancelHandler}
    />
  )
}
