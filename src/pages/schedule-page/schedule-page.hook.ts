import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { schedulePageListActions } from '../../store/pages/schedule-page/schedule-page-list/schedule-page-list.slice'
import {
  genSchedulePageListIsLoaded,
  genSchedulePageListIsLoading,
} from '../../store/pages/schedule-page/schedule-page-list/schedule-page-list.selectors'
import { useStudio } from '../../hooks/use-studios.hook'
import { useSchedulePageParams } from './schedule-page-hooks/schedule-page-params.hook'

export function useSchedulePage() {
  const params = useSchedulePageParams()
  const { studioId: selectedStudioId } = useStudio()
  const { studioId } = params

  const dispatch = useDispatch()

  const isLoading = useSelector(genSchedulePageListIsLoading)
  const isLoaded = useSelector(genSchedulePageListIsLoaded)

  React.useEffect(() => {
    dispatch(schedulePageListActions.fetchPageData(params))
  }, [dispatch, params])

  React.useEffect(() => {
    return () => {
      dispatch(schedulePageListActions.reset())
    }
  }, [dispatch])

  return {
    studioId,
    selectedStudioId,
    isLoading,
    isLoaded,
  }
}
