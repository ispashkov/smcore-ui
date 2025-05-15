import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { ExercisesTable } from '../../../components/exercises/exercises-table/exercises-table.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useSchedulePageTable } from './schedule-page-table.hook'

export const SchedulePageTable: React.FC = () => {
  const { schedule, isLoading, onAddHandler, onCommentHandler, onViewHandler, onCancelHandler } = useSchedulePageTable()

  if (isDefAndNotEmpty(schedule)) {
    return (
      <ExercisesTable
        data={schedule}
        loading={isLoading}
        onAdd={onAddHandler}
        onComment={onCommentHandler}
        onView={onViewHandler}
        onCancel={onCancelHandler}
      />
    )
  }

  return <PageEmpty description="На эту дату нет расписания" />
}
