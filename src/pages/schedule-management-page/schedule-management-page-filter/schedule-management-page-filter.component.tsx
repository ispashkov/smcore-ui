import * as React from 'react'

import { StudiosRoomsTags } from '../../../components/studios-rooms-tags/studios-rooms-tags.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useScheduleManagementPageFilter } from './schedule-management-page-filter.hook'
import './schedule-management-page-filter.styles.less'

export const ScheduleManagementPageFilter: React.FC = () => {
  const { roomId, studiosRoomsTags, onSelectRoomHandler, onResetRoomHandler } = useScheduleManagementPageFilter()

  if (isDefAndNotEmpty(studiosRoomsTags)) {
    return (
      <div className="schedule-management-page-filter">
        <StudiosRoomsTags
          tags={studiosRoomsTags}
          selectedId={roomId}
          onSelect={onSelectRoomHandler}
          onReset={onResetRoomHandler}
        />
      </div>
    )
  }

  return null
}
