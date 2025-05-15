import * as React from 'react'
import { Col, Row } from 'antd'

import { StudiosTable } from '../../../components/studios/studios-table/studios-table.component'
import { useStudiosPageTable } from './studios-page-table.hook'

export const StudiosPageTableComponent: React.FC = () => {
  const { studios, onChangePageHandler, onChangePageSizeHandler, onEditHandler, onRemoveHandler, pagination } =
    useStudiosPageTable()

  return (
    <Row>
      <Col span={24}>
        <StudiosTable
          pagination={pagination}
          data={studios || []}
          onChangePage={onChangePageHandler}
          onChangePageSize={onChangePageSizeHandler}
          onEdit={onEditHandler}
          onRemove={onRemoveHandler}
        />
      </Col>
    </Row>
  )
}
