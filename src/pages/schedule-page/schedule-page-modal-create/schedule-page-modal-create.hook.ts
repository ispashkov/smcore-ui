import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import {
  ExercisesFormValues,
  ExercisesFormValuesDTO,
} from '../../../components/exercises/exercises-form/exercises-form.types'
import { schedulePageModalCreateActions } from '../../../store/pages/schedule-page/schedule-page-modal-create/schedule-page-modal-create.slice'
import {
  getSchedulePageModalCreateIsLoading,
  getSchedulePageModalCreateDirectionsOptions,
  getSchedulePageModalCreateExercisesTypesOptions,
  getSchedulePageModalCreateTrainersOptions,
} from '../../../store/pages/schedule-page/schedule-page-modal-create/schedule-page-modal-create.selectors'
import { modalActions } from '../../../store/common/modal/modal.slice'

export function useSchedulePageModalCreate(studioId: string, studioRoomId: string) {
  const [form] = Form.useForm<ExercisesFormValues>()

  const dispatch = useDispatch()

  const isLoading = useSelector(getSchedulePageModalCreateIsLoading)

  const directionsOptions = useSelector(getSchedulePageModalCreateDirectionsOptions)
  const exercisesTypesOptions = useSelector(getSchedulePageModalCreateExercisesTypesOptions)
  const trainersOptions = useSelector(getSchedulePageModalCreateTrainersOptions)

  React.useEffect(() => {
    dispatch(schedulePageModalCreateActions.fetchDictionaries(studioId))
  }, [dispatch, studioId])

  React.useEffect(() => {
    return () => {
      dispatch(schedulePageModalCreateActions.reset())
    }
  }, [dispatch])

  const onSaveHandler = React.useCallback(
    (exercisesFormValuesDTO: ExercisesFormValuesDTO): void => {
      dispatch(
        schedulePageModalCreateActions.createExercise({
          studioRoomId,
          exercisesFormValuesDTO,
        })
      )
    },
    [dispatch, studioRoomId]
  )

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    form,
    isLoading,
    directionsOptions,
    exercisesTypesOptions,
    trainersOptions,
    onSaveHandler,
    onCancelHandler,
  }
}
