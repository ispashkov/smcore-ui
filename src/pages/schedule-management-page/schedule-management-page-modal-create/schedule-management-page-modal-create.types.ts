import { AppModalBaseProps } from '../../../types/modal.types'
import { ScheduleManagementPageModalProps } from '../schedule-management-page-modal/schedule-management-page-modal.types'

export interface ScheduleManagementPageModalCreateProps
  extends AppModalBaseProps,
    Pick<ScheduleManagementPageModalProps, 'studioId' | 'studioOffset'> {}
