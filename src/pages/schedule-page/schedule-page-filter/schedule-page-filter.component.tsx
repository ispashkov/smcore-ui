import * as React from 'react'
import { Button, Col, Row } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons'

import { StudiosRoomsTags } from '../../../components/studios-rooms-tags/studios-rooms-tags.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useSchedulePageFilter } from './schedule-page-filter.hook'
import './schedule-page-filter.styles.less'

export const SchedulePageFilter: React.FC = () => {
  const { extended, onToggleModeHandler, studiosRoomsTags, roomId, onSelectRoomHandler, onResetRoomHandler } =
    useSchedulePageFilter()

  return (
    <Row className="schedule-page-filter" gutter={[10, 10]} align="middle" justify="space-between">
      <Col span="auto">
        {isDefAndNotEmpty(studiosRoomsTags) && (
          <StudiosRoomsTags
            tags={studiosRoomsTags}
            selectedId={roomId}
            onSelect={onSelectRoomHandler}
            onReset={onResetRoomHandler}
          />
        )}
      </Col>

      <Col span="auto">
        <Button
          icon={<ZoomInOutlined />}
          onClick={onToggleModeHandler}
          type={extended ? 'primary' : 'default'}
          ghost={extended}
        >
          {extended ? 'Закрыть расширеный режим' : 'Расширенный режим'}
        </Button>
      </Col>
    </Row>
  )
}
