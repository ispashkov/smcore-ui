import * as React from 'react'
import { Button, Modal } from 'antd'

import { AppModalBaseProps } from '../../../types/modal.types'
import { ExercisesForm } from '../exercises-form/exercises-form.component'
import { genExercisesFormValuesDTO } from '../exercises-form/exercises-form.utils'
import { ExercisesFormProps, ExercisesFormValuesDTO } from '../exercises-form/exercises-form.types'

interface Props extends AppModalBaseProps, ExercisesFormProps {
  title: string
  loading: boolean
  studioOffset: number
  onSave: (values: ExercisesFormValuesDTO) => void
}

export const ExercisesModal: React.FC<Props> = props => {
  const { title, form, studioOffset, loading } = props
  const { directionsOptions, exercisesTypesOptions, trainersOptions } = props
  const { directionIsDisabled, exercisesTypeIsDisabled } = props
  const { onCancel, onSave } = props

  const onSaveHandler = React.useCallback(() => {
    const values = form.getFieldsValue()
    const scheduleFormValuesDTO = genExercisesFormValuesDTO(values, studioOffset)

    onSave(scheduleFormValuesDTO)
  }, [form, onSave, studioOffset])

  return (
    <Modal
      title={title}
      onCancel={onCancel}
      open={true}
      footer={
        <Button type="primary" loading={loading} onClick={onSaveHandler}>
          Сохранить
        </Button>
      }
    >
      <ExercisesForm
        loading={loading}
        form={form}
        directionsOptions={directionsOptions}
        exercisesTypesOptions={exercisesTypesOptions}
        trainersOptions={trainersOptions}
        directionIsDisabled={directionIsDisabled}
        exercisesTypeIsDisabled={exercisesTypeIsDisabled}
      />
    </Modal>
  )
}
