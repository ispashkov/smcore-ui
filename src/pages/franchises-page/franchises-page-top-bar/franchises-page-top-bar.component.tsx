import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genFranchisesCreatePagePath } from '../../../format/path.format'

export const FranchisesPageTopBar = () => {
  return (
    <Row justify="end" align="middle">
      <Col>
        <Button type="primary">
          <Link to={genFranchisesCreatePagePath()} className="menu-item">
            <Typography.Text>Создать фрашизу</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
