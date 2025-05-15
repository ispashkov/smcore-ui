import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { genHomePagePath, genSchedulePagePath } from '../../format/path.format'
import { isDef } from '../../types/lang.types'
import { SchedulePageSearch } from './schedule-page-search/schedule-page-search.component'
import { SchedulePageTopBar } from './schedule-page-top-bar/schedule-page-top-bar.component'
import { SchedulePageFilter } from './schedule-page-filter/schedule-page-filter.component'
import { SchedulePageTable } from './schedule-page-table/schedule-page-table.component'
import { useSchedulePage } from './schedule-page.hook'

export const SchedulePage: React.FC = () => {
  const { studioId, selectedStudioId, isLoaded, isLoading } = useSchedulePage()

  if (!isDef(studioId)) {
    if (isDef(selectedStudioId)) {
      return <Redirect to={genSchedulePagePath(selectedStudioId)} />
    }

    return <Redirect to={genHomePagePath()} />
  }

  if (!isLoaded && isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <SchedulePageSearch />
      <SchedulePageTopBar />
      <SchedulePageFilter />
      <SchedulePageTable />
    </>
  )
}
