import * as React from 'react'

import { PageEmpty } from '../../../components/page/page-empty/page-empty.component'
import { ScheduleTable } from '../../../components/schedule/schedule-table/schedule-table.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useScheduleManagementPageTable } from './schedule-management-page-table.hook'

export const ScheduleManagementPageTable: React.FC = () => {
  const { schedule, isLoading, onEditHandler, onCancelHandler } = useScheduleManagementPageTable()

  if (isDefAndNotEmpty(schedule)) {
    return <ScheduleTable data={schedule} loading={isLoading} onEdit={onEditHandler} onCancel={onCancelHandler} />
  }

  return <PageEmpty description="На эту дату нет расписания" />
}
