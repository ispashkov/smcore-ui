import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genProductsPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { ProductServicesEditPageForm } from './products-services-edit-page-form/products-services-edit-page-form.component'
import { useServicesEditPage } from './products-services-edit-page.hook'
import './products-services-edit-page.less'
import { ProductsPageSection } from '../products-page/products-page.types'

export const ServiceEditPage = () => {
  useServicesEditPage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genProductsPagePath(ProductsPageSection.SERVICES)}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.PRODUCTS)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Редактирование услуги</Typography.Title>

        <ProductServicesEditPageForm />
      </Col>
    </Row>
  )
}
