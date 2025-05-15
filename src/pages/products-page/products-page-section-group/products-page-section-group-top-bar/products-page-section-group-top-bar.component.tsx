import * as React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { genProductSubscriptionCreatePagePath } from '../../../../format/path.format'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'

export const ProductsPageSectionGroupTopBar: React.FC = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Button type="primary">
          <Link
            to={genProductSubscriptionCreatePagePath({ type: ProductsSubscriptionsApi.ProductSubscriptionType.GROUP })}
            className="menu-item"
          >
            <Typography.Text>Новый абонемент</Typography.Text>
          </Link>
        </Button>
      </Col>
    </Row>
  )
}
