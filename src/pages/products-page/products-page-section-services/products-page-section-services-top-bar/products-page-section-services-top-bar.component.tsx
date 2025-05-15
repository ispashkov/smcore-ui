import * as React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genProductServicesCreatePagePath } from '../../../../format/path.format'

export const ProductsPageSectionServicesTopBar: React.FC = props => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Button type="primary">
          <Link to={genProductServicesCreatePagePath()} className="menu-item">
            <Typography.Text>Новая услуга</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
