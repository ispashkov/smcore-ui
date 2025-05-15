import * as React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, DatePicker, Checkbox } from 'antd'
import moment from 'moment'

import { genScheduleManagementPagePath } from '../../../format/path.format'
import { genDefaultDateFormat } from '../../../format/date.format'
import { useSchedulePageTopBar } from './schedule-page-top-bar.hook'
import './schedule-page-top-bar.styles.less'

export const SchedulePageTopBar: React.FC = () => {
  const {
    studioId,
    completed,
    onToggleCompletedHandler,
    date,
    onYesterdayHandler,
    onTodayHandler,
    onChangeDateHandler,
  } = useSchedulePageTopBar()

  return (
    <Row className="schedule-page-top-bar" gutter={[10, 10]}>
      <Col span="auto">
        <Link to={genScheduleManagementPagePath(studioId)}>
          <Button type="primary">Управлять расписанием</Button>
        </Link>
      </Col>

      <Col span="auto">
        <Button onClick={onYesterdayHandler}>Вчера</Button>
      </Col>

      <Col span="auto">
        <Button onClick={onTodayHandler}>Сегодня</Button>
      </Col>

      <Col span="auto">
        <DatePicker
          placeholder="Календарь"
          value={moment(date)}
          format={genDefaultDateFormat()}
          onChange={onChangeDateHandler}
        />
      </Col>

      <Col span={24}>
        <Checkbox checked={completed} onChange={onToggleCompletedHandler}>
          Показать завершённые тренировки
        </Checkbox>
      </Col>
    </Row>
  )
}
