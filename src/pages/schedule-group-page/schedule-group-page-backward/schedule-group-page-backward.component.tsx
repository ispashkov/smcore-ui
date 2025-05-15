import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genSchedulePagePath } from '../../../format/path.format'
import { formatPathName } from '../../../format/text.format'
import { AppPath } from '../../../types/path.types'
import { useScheduleGroupPageParams } from '../schedule-group-page-hooks/schedule-group-page-params.hook'
import './schedule-group-page-backward.styles.less'

export const ScheduleGroupPageBackward: React.FC = () => {
  const { studioId } = useScheduleGroupPageParams()

  return (
    <div className="schedule-group-page-backward">
      <Link to={genSchedulePagePath(studioId)}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          {formatPathName(AppPath.SCHEDULE)}
        </Button>
      </Link>
    </div>
  )
}
