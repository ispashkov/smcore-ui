import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { genProductsPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { useProductsServiceCreatePage } from './products-services-create-page.hook'
import { ProductsPageSection } from '../products-page/products-page.types'
import { ProductServicesCreatePageForm } from './products-services-create-page-form/products-services-create-page.component'

export const ProductsServiceCreatePage = () => {
  useProductsServiceCreatePage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genProductsPagePath(ProductsPageSection.SERVICES)}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.PRODUCTS)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Добавление услуги</Typography.Title>

        <ProductServicesCreatePageForm />
      </Col>
    </Row>
  )
}
