import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genDirectionsCreatePagePath } from '../../../format/path.format'

export const DirectionsPageTopBar = () => {
  return (
    <Row justify="start" align="middle">
      <Col>
        <Button type="primary">
          <Link to={genDirectionsCreatePagePath()} className="menu-item">
            <Typography.Text>Добавить направление</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
