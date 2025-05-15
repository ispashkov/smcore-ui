import * as React from 'react'

import { ScheduleModal } from '../../../components/schedule/schedule-modal/schedule-modal.component'
import { useScheduleManagementPageModal } from './schedule-management-page-modal.hook'
import { ScheduleManagementPageModalProps } from './schedule-management-page-modal.types'

export const ScheduleManagementPageModal: React.FC<ScheduleManagementPageModalProps> = props => {
  const { studioId, studioOffset, form, title, loading, onSave } = props

  const {
    isLoadingDictionaries,
    directionsOptions,
    exercisesTypesOptions,
    studiosRoomsOptions,
    trainersOptions,
    onCancelHandler,
  } = useScheduleManagementPageModal(studioId)

  return (
    <ScheduleModal
      title={title}
      form={form}
      loading={isLoadingDictionaries || loading}
      studioOffset={studioOffset}
      directionsOptions={directionsOptions}
      exercisesTypesOptions={exercisesTypesOptions}
      studiosRoomsOptions={studiosRoomsOptions}
      trainersOptions={trainersOptions}
      onSave={onSave}
      onCancel={onCancelHandler}
    />
  )
}
