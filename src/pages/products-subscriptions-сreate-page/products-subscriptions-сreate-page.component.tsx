import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { genProductsPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { ProductsPageSection } from '../products-page/products-page.types'
import { useProductsSubscriptionsCreatePage } from './products-subscriptions-сreate-page.hook'
import { ProductSubscriptionCreatePageForm } from './products-subscriptions-сreate-page-form/products-subscriptions-сreate-page.component'

export const ProductsSubscriptionCreatePage = () => {
  useProductsSubscriptionsCreatePage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genProductsPagePath(ProductsPageSection.GROUP_SUBSCRIPTIONS)}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.PRODUCTS)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Добавление абонемента</Typography.Title>

        <ProductSubscriptionCreatePageForm />
      </Col>
    </Row>
  )
}
