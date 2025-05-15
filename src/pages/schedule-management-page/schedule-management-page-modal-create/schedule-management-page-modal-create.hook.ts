import * as React from 'react'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import {
  ScheduleFormValues,
  ScheduleFormValuesDTO,
} from '../../../components/schedule/schedule-form/schedule-form.types'
import { genScheduleManagementPageModalCreateIsLoading } from '../../../store/pages/schedule-management-page/schedule-management-page-modal-create/schedule-management-page-modal-create.selectors'
import { scheduleManagementPageModalCreateActions } from '../../../store/pages/schedule-management-page/schedule-management-page-modal-create/schedule-management-page-modal-create.slice'

export function useScheduleManagementPageModalCreate() {
  const [form] = Form.useForm<ScheduleFormValues>()

  const dispatch = useDispatch()

  const isLoading = useSelector(genScheduleManagementPageModalCreateIsLoading)

  React.useEffect(() => {
    return () => {
      dispatch(scheduleManagementPageModalCreateActions.reset())
    }
  }, [dispatch])

  const onSaveHandler = React.useCallback(
    (values: ScheduleFormValuesDTO): void => {
      dispatch(scheduleManagementPageModalCreateActions.createSchedule(values))
    },
    [dispatch]
  )

  return {
    form,
    isLoading,
    onSaveHandler,
  }
}
