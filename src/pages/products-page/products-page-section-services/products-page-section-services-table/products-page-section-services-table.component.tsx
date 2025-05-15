import * as React from 'react'
import { Row, Col } from 'antd'

import { isDef } from '../../../../types/lang.types'
import { ProductsServicesTable } from '../../../../components/products/products-services-table/products-services-table.component'
import { useProductsPageSectionServicesTable } from './products-page-section-services-table.hook'

export const ProductsPageSectionServicesTable: React.FC = () => {
  const {
    services,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useProductsPageSectionServicesTable()

  if (isDef(services)) {
    return (
      <Row>
        <Col span={24}>
          <ProductsServicesTable
            data={services}
            pagination={pagination}
            loading={isLoading}
            onChangePage={onChangePageHandler}
            onChangePageSize={onChangePageSizeHandler}
            onEdit={onEditHandler}
            onRemove={onRemoveHandler}
          />
        </Col>
      </Row>
    )
  }

  return null
}
