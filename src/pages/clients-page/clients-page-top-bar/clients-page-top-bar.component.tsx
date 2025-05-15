import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genClientsCreatePagePath } from '../../../format/path.format'

export const ClientsPageTopBar = () => {
  return (
    <Row justify="start" align="middle">
      <Col>
        <Button type="primary">
          <Link to={genClientsCreatePagePath()} className="menu-item">
            <Typography.Text>Добавить Клиента</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
