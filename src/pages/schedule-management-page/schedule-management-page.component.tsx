import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { genHomePagePath, genScheduleManagementPagePath } from '../../format/path.format'
import { isDef } from '../../types/lang.types'
import { ScheduleManagementPageTitle } from './schedule-management-page-title/schedule-management-page-title.component'
import { ScheduleManagementPageSearch } from './schedule-management-page-search/schedule-management-page-search.component'
import { ScheduleManagementPageAdd } from './schedule-management-page-add/schedule-management-page-add.component'
import { ScheduleManagementPageFilter } from './schedule-management-page-filter/schedule-management-page-filter.component'
import { ScheduleManagementPageTable } from './schedule-management-page-table/schedule-management-page-table.component'
import { useScheduleManagementPage } from './schedule-management-page.hook'

export const ScheduleManagementPage: React.FC = () => {
  const { studioId, selectedStudioId, isLoaded, isLoading } = useScheduleManagementPage()

  if (!isDef(studioId)) {
    if (isDef(selectedStudioId)) {
      return <Redirect to={genScheduleManagementPagePath(selectedStudioId)} />
    }

    return <Redirect to={genHomePagePath()} />
  }

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ScheduleManagementPageTitle />
      <ScheduleManagementPageSearch />
      <ScheduleManagementPageAdd />
      <ScheduleManagementPageFilter />
      <ScheduleManagementPageTable />
    </>
  )
}
