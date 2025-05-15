import * as React from 'react'
import { Row, Col } from 'antd'

import { FranchisesTable } from '../../../components/franchises/franchises-table/franchises-table.component'
import { isDefAndNotEmpty } from '../../../types/lang.types'
import { useFranchisesPageTable } from './franchises-page-table.hook'

export const FranchisesPageTable = () => {
  const {
    franchises,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useFranchisesPageTable()

  if (isDefAndNotEmpty(franchises)) {
    return (
      <Row>
        <Col span={24}>
          <FranchisesTable
            data={franchises}
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
