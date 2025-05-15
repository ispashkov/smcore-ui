import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genProductsPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import './products-subscriptions-edit-page.less'
import { ProductsPageSection } from '../products-page/products-page.types'
import { useProductsEditPage } from './products-subscriptions-edit-page.hook'
import { ProductSubscriptionsEditPageForm } from './products-subscriptions-edit-page-form/products-subscriptions-edit-page-form.component'

export const ProductsSubscriptionsEditPage = () => {
  useProductsEditPage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genProductsPagePath(ProductsPageSection.GROUP_SUBSCRIPTIONS)}>
            <Typography.Text className="backBtnTitle">
              {formatPathName(AppPath.PRODUCTS_EDIT_SUBSCRIPTION)}
            </Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Редактирование абонемента</Typography.Title>

        <ProductSubscriptionsEditPageForm />
      </Col>
    </Row>
  )
}
