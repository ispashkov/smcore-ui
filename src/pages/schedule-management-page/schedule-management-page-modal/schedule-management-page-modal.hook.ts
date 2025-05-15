import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modalActions } from '../../../store/common/modal/modal.slice'
import {
  getScheduleManagementPageModalDirectionsOptions,
  getScheduleManagementPageModalExercisesTypesOptions,
  getScheduleManagementPageModalIsLoading,
  getScheduleManagementPageModalStudiosRoomsOptions,
  getScheduleManagementPageModalTrainersOptions,
} from '../../../store/pages/schedule-management-page/schedule-management-page-modal/schedule-management-page-modal.selectors'
import { scheduleManagementPageModalActions } from '../../../store/pages/schedule-management-page/schedule-management-page-modal/schedule-management-page-modal.slice'

export function useScheduleManagementPageModal(studioId: string) {
  const dispatch = useDispatch()

  const isLoadingDictionaries = useSelector(getScheduleManagementPageModalIsLoading)

  const directionsOptions = useSelector(getScheduleManagementPageModalDirectionsOptions)
  const exercisesTypesOptions = useSelector(getScheduleManagementPageModalExercisesTypesOptions)
  const studiosRoomsOptions = useSelector(getScheduleManagementPageModalStudiosRoomsOptions)
  const trainersOptions = useSelector(getScheduleManagementPageModalTrainersOptions)

  React.useEffect(() => {
    dispatch(scheduleManagementPageModalActions.fetchDictionaries(studioId))
  }, [dispatch, studioId])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleManagementPageModalActions.reset())
    }
  }, [dispatch])

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  return {
    isLoadingDictionaries,
    directionsOptions,
    exercisesTypesOptions,
    studiosRoomsOptions,
    trainersOptions,
    onCancelHandler,
  }
}
