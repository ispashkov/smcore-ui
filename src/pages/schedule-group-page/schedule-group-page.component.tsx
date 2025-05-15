import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { genHomePagePath, genSchedulePagePath } from '../../format/path.format'
import { isDef } from '../../types/lang.types'
import { ScheduleGroupPageBackward } from './schedule-group-page-backward/schedule-group-page-backward.component'
import { ScheduleGroupPageHeader } from './schedule-group-page-header/schedule-group-page-header.component'
import { ScheduleGroupPageSearch } from './schedule-group-page-search/schedule-group-page-search.component'
import { ScheduleGroupPageActions } from './schedule-group-page-actions/schedule-group-page-actions.component'
import { ScheduleGroupPageTable } from './schedule-group-page-table/schedule-group-page-table.component'
import { useScheduleGroupPage } from './schedule-group-page.hook'

export const ScheduleGroupPage: React.FC = () => {
  const { studioId, selectedStudioId, isLoaded, isLoading } = useScheduleGroupPage()

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
      <ScheduleGroupPageBackward />
      <ScheduleGroupPageHeader />
      <ScheduleGroupPageSearch />
      <ScheduleGroupPageActions />
      <ScheduleGroupPageTable />
    </>
  )
}
