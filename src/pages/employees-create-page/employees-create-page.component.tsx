import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genEmployeesPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { EmployeesCreatePageForm } from './employees-create-page-form/employees-create-page-form.component'
import { useEmployeesCreatePage } from './employees-create-page.hook'
import './employees-create-page.styles.less'

export const EmployeesCreatePage = () => {
  useEmployeesCreatePage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genEmployeesPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.EMPLOYEES)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Создание сотрудника</Typography.Title>

        <EmployeesCreatePageForm />
      </Col>
    </Row>
  )
}
