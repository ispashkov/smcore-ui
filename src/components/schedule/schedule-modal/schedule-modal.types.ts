import { AppModalBaseProps } from '../../../types/modal.types'
import {
  ScheduleFormBaseProps,
  ScheduleFormOptionsProps,
  ScheduleFormValuesDTO,
} from '../schedule-form/schedule-form.types'

export interface ScheduleModalProps extends AppModalBaseProps, ScheduleFormBaseProps, ScheduleFormOptionsProps {
  title: string
  loading: boolean
  studioOffset: number
  onSave: (values: ScheduleFormValuesDTO) => void
}
