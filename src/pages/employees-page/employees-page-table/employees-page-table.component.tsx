import * as React from 'react'
import { Col, Row } from 'antd'

import { EmployeesTable } from '../../../components/employees/employees-table/employees-table.component'
import { useEmployeesPageTable } from './employees-page-table.hook'

interface Props {
  className?: string
}

export const EmployeesPageTable: React.FC<Props> = props => {
  const {
    employees,
    pagination,
    isLoading,
    onEditHandler,
    onRemoveHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
  } = useEmployeesPageTable()

  return (
    <Row>
      <Col span={24}>
        <EmployeesTable
          data={employees || []}
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
