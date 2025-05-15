import * as React from 'react'

import { ScheduleManagementPageModalEditProps } from './schedule-management-page-modal-edit.types'
import { useScheduleManagementPageModalEdit } from './schedule-management-page-modal-edit.hook'
import { ScheduleManagementPageModal } from '../schedule-management-page-modal/schedule-management-page-modal.component'

export const ScheduleManagementPageModalEdit: React.FC<ScheduleManagementPageModalEditProps> = props => {
  const { id, studioId, studioOffset } = props
  const { form, isLoading, onSaveHandler } = useScheduleManagementPageModalEdit(id)

  return (
    <ScheduleManagementPageModal
      title="Редактирование занятия"
      form={form}
      studioOffset={studioOffset}
      studioId={studioId}
      loading={isLoading}
      onSave={onSaveHandler}
    />
  )
}
