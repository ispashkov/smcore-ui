import { ScheduleModalProps } from '../../../components/schedule/schedule-modal/schedule-modal.types'

export interface ScheduleManagementPageModalProps
  extends Pick<ScheduleModalProps, 'form' | 'title' | 'studioOffset' | 'loading' | 'onSave'> {
  studioId: string
}
