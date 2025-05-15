import * as React from 'react'
import { Row, Col } from 'antd'

import { useProductsPageSectionGroupTable } from './products-page-section-group-table.hook'
import { isDef } from '../../../../types/lang.types'
import { ProductsSubscriptionsTable } from '../../../../components/products/products-subscriptions-table/products-subscriptions-table.component'

export const ProductsPageSectionGroupTable: React.FC = () => {
  const {
    subscriptions,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useProductsPageSectionGroupTable()

  if (isDef(subscriptions)) {
    return (
      <Row>
        <Col span={24}>
          <ProductsSubscriptionsTable
            data={subscriptions}
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
