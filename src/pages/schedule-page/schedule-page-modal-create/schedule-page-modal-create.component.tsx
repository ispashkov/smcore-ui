import * as React from 'react'

import { ExercisesModal } from '../../../components/exercises/exercises-modal/exercises-modal.component'
import { useSchedulePageModalCreate } from './schedule-page-modal-create.hook'
import { SchedulePageModalCreateProps } from './schedule-page-modal-create.types'

export const SchedulePageModalCreate: React.FC<SchedulePageModalCreateProps> = props => {
  const { studioId, studioOffset, studioRoomId } = props

  const { form, isLoading, directionsOptions, exercisesTypesOptions, trainersOptions, onSaveHandler, onCancelHandler } =
    useSchedulePageModalCreate(studioId, studioRoomId)

  return (
    <ExercisesModal
      title="Новая тренировка"
      form={form}
      studioOffset={studioOffset}
      directionsOptions={directionsOptions}
      exercisesTypesOptions={exercisesTypesOptions}
      trainersOptions={trainersOptions}
      loading={isLoading}
      onSave={onSaveHandler}
      onCancel={onCancelHandler}
    />
  )
}
