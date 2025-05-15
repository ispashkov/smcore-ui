import * as React from 'react'
import { Button, Modal } from 'antd'

import { ScheduleForm } from '../schedule-form/schedule-form.component'
import { genScheduleFormValuesDTO } from '../schedule-form/schedule-form.utils'
import { ScheduleModalProps } from './schedule-modal.types'
import './schedule-modal.styles.less'

export const ScheduleModal: React.FC<ScheduleModalProps> = props => {
  const { form, title, studioOffset, loading } = props
  const { directionsOptions, exercisesTypesOptions, studiosRoomsOptions, trainersOptions } = props
  const { onCancel, onSave } = props

  const [isValid, setIsValid] = React.useState<boolean>(false)

  const onSaveHandler = React.useCallback(() => {
    const values = form.getFieldsValue()
    const scheduleFormValuesDTO = genScheduleFormValuesDTO(values, studioOffset)

    onSave(scheduleFormValuesDTO)
  }, [form, onSave, studioOffset])

  const onFieldChangeHandler = React.useCallback(setIsValid, [setIsValid])

  return (
    <Modal
      className="schedule-modal"
      title={title}
      onCancel={onCancel}
      visible={true}
      width={704}
      footer={
        <Button type="primary" loading={loading} onClick={onSaveHandler} disabled={!isValid}>
          Сохранить
        </Button>
      }
    >
      <ScheduleForm
        form={form}
        loading={loading}
        directionsOptions={directionsOptions}
        exercisesTypesOptions={exercisesTypesOptions}
        studiosRoomsOptions={studiosRoomsOptions}
        trainersOptions={trainersOptions}
        onFieldsChange={onFieldChangeHandler}
      />
    </Modal>
  )
}
