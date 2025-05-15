import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  genScheduleGroupPageBookings,
  genScheduleGroupPageBookingsTotalElements,
  genScheduleGroupPageListIsLoading,
} from '../../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.selectors'
import { genScheduleGroupPagePath } from '../../../format/path.format'
import { genPaginationConfig } from '../../../utils/pagination.utils'
import { useScheduleGroupPageParams } from '../schedule-group-page-hooks/schedule-group-page-params.hook'
import { scheduleGroupPageListActions } from '../../../store/pages/schedule-group-page/schedule-group-page-list/schedule-group-page-list.slice'

export function useScheduleGroupPageTable() {
  const { push } = useHistory()

  const dispatch = useDispatch()

  const { studioId, scheduleId, page, size } = useScheduleGroupPageParams()

  const bookings = useSelector(genScheduleGroupPageBookings)
  const bookingsTotalElements = useSelector(genScheduleGroupPageBookingsTotalElements)
  const isLoading = useSelector(genScheduleGroupPageListIsLoading)

  const pagination = React.useMemo(
    () => genPaginationConfig(page, size, bookingsTotalElements),
    [bookingsTotalElements, page, size]
  )

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genScheduleGroupPagePath(studioId, scheduleId, { page: page, size: pageSize }))
    },
    [push, scheduleId, studioId]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genScheduleGroupPagePath(studioId, scheduleId, { page, size: pageSize }))
    },
    [page, push, scheduleId, studioId]
  )

  const onVisitHandler = React.useCallback(
    (bookingId: string, checked: boolean): void => {
      dispatch(
        scheduleGroupPageListActions.changeBookingVisitingConfirmation({
          exerciseId: scheduleId,
          bookingId,
          confirm: checked,
        })
      )
    },
    [dispatch, scheduleId]
  )

  const onCommentHandler = React.useCallback((id: string): void => console.log(id), [])

  const onCancelHandler = React.useCallback(
    (bookingId: string): void => {
      dispatch(
        scheduleGroupPageListActions.cancelBooking({
          exerciseId: scheduleId,
          bookingId,
          /**
           * @todo Should be implemented
           */
          reason: '',
        })
      )
    },
    [dispatch, scheduleId]
  )

  return {
    bookings,
    pagination,
    isLoading,
    onVisitHandler,
    onCommentHandler,
    onCancelHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  }
}
