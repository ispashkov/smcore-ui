import * as React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genStudiosCreatePagePath } from '../../../format/path.format'
import './styles.less'
import { StudiosPageFiltersComponent } from './studios-page-filters-component'

export const StudiosTopBar: React.FC = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col span={12}>
        <StudiosPageFiltersComponent />
      </Col>
      <Col span={4} className="topBar-btn-wrp">
        <Button type="primary">
          <Link to={genStudiosCreatePagePath()} className="menu-item">
            <Typography.Text>Добавить студию</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
