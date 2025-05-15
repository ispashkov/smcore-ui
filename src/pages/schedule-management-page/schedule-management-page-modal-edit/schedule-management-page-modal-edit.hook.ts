import * as React from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import {
  ScheduleFormValues,
  ScheduleFormValuesDTO,
} from '../../../components/schedule/schedule-form/schedule-form.types'
import {
  genScheduleManagementPageModalEditExercise,
  genScheduleManagementPageModalEditIsLoading,
} from '../../../store/pages/schedule-management-page/schedule-management-page-modal-edit/schedule-management-page-modal-edit.selectors'
import { scheduleManagementPageModalEditActions } from '../../../store/pages/schedule-management-page/schedule-management-page-modal-edit/schedule-management-page-modal-edit.slice'
import { isDef } from '../../../types/lang.types'

export function useScheduleManagementPageModalEdit(id: string) {
  const [form] = Form.useForm<ScheduleFormValues>()

  const dispatch = useDispatch()

  const schedule = useSelector(genScheduleManagementPageModalEditExercise)
  const isLoading = useSelector(genScheduleManagementPageModalEditIsLoading)

  React.useEffect(() => {
    dispatch(scheduleManagementPageModalEditActions.fetchSchedule(id))
  }, [dispatch, id])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleManagementPageModalEditActions.reset())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (isDef(schedule)) {
      form.setFieldsValue(schedule)
    }
  }, [schedule, form])

  const onSaveHandler = React.useCallback(
    (values: ScheduleFormValuesDTO): void => {
      dispatch(
        scheduleManagementPageModalEditActions.updateSchedule({
          id: id,
          scheduleFormValues: values,
        })
      )
    },
    [dispatch, id]
  )

  return {
    form,
    isLoading,
    onSaveHandler,
  }
}
