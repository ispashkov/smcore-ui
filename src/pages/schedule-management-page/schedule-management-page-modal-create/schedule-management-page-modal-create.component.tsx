import * as React from 'react'

import { ScheduleManagementPageModalCreateProps } from './schedule-management-page-modal-create.types'
import { useScheduleManagementPageModalCreate } from './schedule-management-page-modal-create.hook'
import { ScheduleManagementPageModal } from '../schedule-management-page-modal/schedule-management-page-modal.component'

export const ScheduleManagementPageModalCreate: React.FC<ScheduleManagementPageModalCreateProps> = props => {
  const { studioId, studioOffset } = props
  const { form, isLoading, onSaveHandler } = useScheduleManagementPageModalCreate()

  return (
    <ScheduleManagementPageModal
      title="Новое занятие"
      form={form}
      studioOffset={studioOffset}
      studioId={studioId}
      loading={isLoading}
      onSave={onSaveHandler}
    />
  )
}
