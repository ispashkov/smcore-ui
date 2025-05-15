import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { ExercisesGroupBookingsTable } from '../../../components/exercises-group/exercises-group-bookings-table/exercises-group-bookings-table.component'
import { useScheduleGroupPageTable } from './schedule-group-page-table.hook'

export const ScheduleGroupPageTable: React.FC = () => {
  const {
    bookings,
    pagination,
    isLoading,
    onChangePageHandler,
    onChangePageSizeHandler,
    onVisitHandler,
    onCommentHandler,
    onCancelHandler,
  } = useScheduleGroupPageTable()

  if (isDefAndNotEmpty(bookings)) {
    return (
      <ExercisesGroupBookingsTable
        data={bookings}
        pagination={pagination}
        loading={isLoading}
        onChangePage={onChangePageHandler}
        onChangePageSize={onChangePageSizeHandler}
        onVisit={onVisitHandler}
        onComment={onCommentHandler}
        onCancel={onCancelHandler}
      />
    )
  }

  return <PageEmpty description="В этой группе нет записаных клиентов" />
}
