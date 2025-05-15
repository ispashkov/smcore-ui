import * as React from 'react'
import { Row, Col } from 'antd'

import { isDef } from '../../../../types/lang.types'
import { ProductsSubscriptionsTable } from '../../../../components/products/products-subscriptions-table/products-subscriptions-table.component'
import { useProductsPageSectionIndividualTable } from './products-page-section-individual-table.hook'

export const ProductsPageSectionIndividualTable: React.FC = () => {
  const {
    subscriptions,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useProductsPageSectionIndividualTable()

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
