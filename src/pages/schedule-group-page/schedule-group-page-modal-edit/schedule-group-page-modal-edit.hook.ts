import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd'

import { isDef } from '../../../types/lang.types'
import {
  ExercisesFormValues,
  ExercisesFormValuesDTO,
} from '../../../components/exercises/exercises-form/exercises-form.types'
import { modalActions } from '../../../store/common/modal/modal.slice'
import {
  getScheduleGroupPageModalEditIsLoading,
  getScheduleGroupPageModalEditDirectionsOptions,
  getScheduleGroupPageModalEditTrainersOptions,
  getScheduleGroupPageModalEditExercisesTypesOptions,
  getScheduleGroupPageModalEditIsLoaded,
} from '../../../store/pages/schedule-group-page/schedule-group-page-modal-edit/schedule-group-page-modal-edit.selectors'
import { scheduleGroupPageModalEditActions } from '../../../store/pages/schedule-group-page/schedule-group-page-modal-edit/schedule-group-page-modal-edit.slice'
import { genScheduleGroupPageExerciseFormValues } from '../../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.selectors'

export function useScheduleGroupPageModalEdit(scheduleId: string, studioRoomId: string) {
  const [form] = Form.useForm<ExercisesFormValues>()

  const dispatch = useDispatch()

  const exerciseFormValues = useSelector(genScheduleGroupPageExerciseFormValues)

  const isLoading = useSelector(getScheduleGroupPageModalEditIsLoading)
  const isLoaded = useSelector(getScheduleGroupPageModalEditIsLoaded)

  const directionsOptions = useSelector(getScheduleGroupPageModalEditDirectionsOptions)
  const exercisesTypesOptions = useSelector(getScheduleGroupPageModalEditExercisesTypesOptions)
  const trainersOptions = useSelector(getScheduleGroupPageModalEditTrainersOptions)

  React.useEffect((): void => {
    if (isLoaded && isDef(exerciseFormValues)) {
      form.setFieldsValue(exerciseFormValues)
    }
  }, [exerciseFormValues, form, isLoaded])

  React.useEffect(() => {
    dispatch(scheduleGroupPageModalEditActions.fetchDictionaries(studioRoomId))
  }, [dispatch, studioRoomId])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleGroupPageModalEditActions.reset())
    }
  }, [dispatch])

  const onSaveHandler = React.useCallback(
    (exercisesFormValuesDTO: ExercisesFormValuesDTO): void => {
      dispatch(
        scheduleGroupPageModalEditActions.editExercise({
          exerciseId: scheduleId,
          studioRoomId,
          exercisesFormValuesDTO,
        })
      )
    },
    [dispatch, scheduleId, studioRoomId]
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
