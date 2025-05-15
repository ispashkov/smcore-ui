import * as React from 'react'

import { ExercisesModal } from '../../../components/exercises/exercises-modal/exercises-modal.component'
import { ScheduleGroupPageModalEditProps } from './schedule-group-page-modal-edit.types'
import { useScheduleGroupPageModalEdit } from './schedule-group-page-modal-edit.hook'

export const ScheduleGroupPageModalEdit: React.FC<ScheduleGroupPageModalEditProps> = props => {
  const { studioRoomId, scheduleId, studioOffset } = props

  const { form, isLoading, directionsOptions, exercisesTypesOptions, trainersOptions, onSaveHandler, onCancelHandler } =
    useScheduleGroupPageModalEdit(scheduleId, studioRoomId)

  return (
    <ExercisesModal
      title="Редактировать тренировку"
      form={form}
      loading={isLoading}
      studioOffset={studioOffset}
      directionsOptions={directionsOptions}
      exercisesTypesOptions={exercisesTypesOptions}
      trainersOptions={trainersOptions}
      onSave={onSaveHandler}
      onCancel={onCancelHandler}
      directionIsDisabled
      exercisesTypeIsDisabled
    />
  )
}
