import * as React from 'react'
import { Col, Row } from 'antd'

import { DirectionsTable } from '../../../components/directions/directions-table/directions-table.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useDirectionsPageTable } from './directions-page-table.hook'

export const DirectionsPageTable: React.FC = () => {
  const {
    directions,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useDirectionsPageTable()

  if (isDefAndNotEmpty(directions)) {
    return (
      <Row>
        <Col span={24}>
          <DirectionsTable
            data={directions}
            pagination={pagination}
            loading={isLoading}
            onEdit={onEditHandler}
            onRemove={onRemoveHandler}
            onChangePage={onChangePageHandler}
            onChangePageSize={onChangePageSizeHandler}
          />
        </Col>
      </Row>
    )
  }

  return null
}
