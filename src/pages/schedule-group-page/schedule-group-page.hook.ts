import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { scheduleGroupPageListActions } from '../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.slice'
import {
  genScheduleGroupPageListIsLoaded,
  genScheduleGroupPageListIsLoading,
} from '../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.selectors'
import { useStudio } from '../../hooks/use-studios.hook'
import { useScheduleGroupPageParams } from './schedule-group-page-hooks/schedule-group-page-params.hook'

export function useScheduleGroupPage() {
  const { scheduleId, studioId, page, size, productCategoryId } = useScheduleGroupPageParams()
  const { studioId: selectedStudioId } = useStudio()

  const dispatch = useDispatch()

  const isLoading = useSelector(genScheduleGroupPageListIsLoading)
  const isLoaded = useSelector(genScheduleGroupPageListIsLoaded)

  React.useEffect(() => {
    dispatch(
      scheduleGroupPageListActions.fetchPageData({
        id: scheduleId,
        params: {
          page,
          size,
          productCategoryId,
        },
      })
    )
  }, [dispatch, page, productCategoryId, scheduleId, size])

  React.useEffect(() => {
    return () => {
      dispatch(scheduleGroupPageListActions.reset())
    }
  }, [dispatch])

  return {
    scheduleId,
    studioId,
    selectedStudioId,
    isLoading,
    isLoaded,
  }
}
