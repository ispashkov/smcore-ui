import { AppModalBaseProps } from '../../../types/modal.types'
import {
  ExercisesGroupBookingFormProps,
  ExercisesGroupBookingFormValues,
} from '../exercises-group-booking-form/exercises-group-booking-form.types'

export interface ExercisesGroupBookingModalProps extends AppModalBaseProps, ExercisesGroupBookingFormProps {
  onSave: (values: ExercisesGroupBookingFormValues) => void
}
