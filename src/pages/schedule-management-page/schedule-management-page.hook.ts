import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useStudio } from '../../hooks/use-studios.hook'
import { scheduleManagementPageListActions } from '../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.slice'
import {
  genScheduleManagementPageListIsLoaded,
  genScheduleManagementPageListIsLoading,
} from '../../store/pages/schedule-management-page/schedule-management-page-list/schedule-management-page-list.selectors'
import { useScheduleManagementPageParams } from './schedule-management-page-hooks/schedule-management-page-params.hook'

export function useScheduleManagementPage() {
  const params = useScheduleManagementPageParams()
  const { studioId: selectedStudioId } = useStudio()
  const { studioId } = params

  const dispatch = useDispatch()

  const isLoading = useSelector(genScheduleManagementPageListIsLoading)
  const isLoaded = useSelector(genScheduleManagementPageListIsLoaded)

  React.useEffect(() => {
    dispatch(scheduleManagementPageListActions.fetchPageData(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleManagementPageListActions.reset())
    }
  }, [dispatch])

  return {
    studioId,
    selectedStudioId,
    isLoading,
    isLoaded,
  }
}
