import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genEmployeesCreatePagePath } from '../../../format/path.format'

export const EmployeesPageTopBar = () => {
  return (
    <Row justify="start" align="middle">
      <Col>
        <Button type="primary">
          <Link to={genEmployeesCreatePagePath()} className="menu-item">
            <Typography.Text>Добавить сотрудника</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
