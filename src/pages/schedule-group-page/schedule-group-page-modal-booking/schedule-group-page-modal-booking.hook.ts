import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { ExercisesGroupBookingFormValues } from '../../../components/exercises-group/exercises-group-booking-form/exercises-group-booking-form.types'
import { genPaymentTypesOptions } from '../../../utils/payment.utils'
import {
  genScheduleGroupPageModalBookingExercisesSpots,
  genScheduleGroupPageModalBookingIsLoading,
} from '../../../store/pages/schedule-group-page/schedule-group-page-modal-booking/schedule-group-page-modal-booking.selectors'
import { scheduleGroupPageModalBookingActions } from '../../../store/pages/schedule-group-page/schedule-group-page-modal-booking/schedule-group-page-modal-booking.slice'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { isDef } from '../../../types/lang.types'

export function useScheduleGroupPageModalBooking(scheduleId: string, phone?: string) {
  const [form] = Form.useForm<ExercisesGroupBookingFormValues>()

  const dispatch = useDispatch()

  const loading = useSelector(genScheduleGroupPageModalBookingIsLoading)
  const placesOptions = useSelector(genScheduleGroupPageModalBookingExercisesSpots)

  const paymentTypesOptions = React.useMemo(genPaymentTypesOptions, [])

  React.useEffect((): void => {
    dispatch(scheduleGroupPageModalBookingActions.fetchExercisesSpots(scheduleId))
  }, [dispatch, scheduleId])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleGroupPageModalBookingActions.reset())
    }
  }, [dispatch])

  React.useEffect((): void => {
    if (isDef(phone)) {
      form.setFieldValue('phone', phone)
    }
  }, [form, phone])

  const onSaveHandler = React.useCallback(
    (exercisesGroupBookingFormValues: ExercisesGroupBookingFormValues): void => {
      dispatch(
        scheduleGroupPageModalBookingActions.createBooking({
          exerciseId: scheduleId,
          exercisesGroupBookingFormValues,
        })
      )
    },
    [dispatch, scheduleId]
  )

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    form,
    loading,

    paymentTypesOptions,
    placesOptions,

    onSaveHandler,
    onCancelHandler,
  }
}
