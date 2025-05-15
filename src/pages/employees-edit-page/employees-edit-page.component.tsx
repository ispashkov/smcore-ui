import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { PageLoader } from '../../components/page/page-loader/page-loader.component'
import { genEmployeesPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { EmployeesEditPageForm } from './employees-edit-page-form/employees-edit-page-form.component'
import { useEmployeesEditPage } from './employees-edit-page.hook'
import './employees-edit-page.styles.less'

export const EmployeesEditPage = () => {
  const { isLoaded, isLoading } = useEmployeesEditPage()

  if (!isLoaded || isLoading) {
    return <PageLoader />
  }

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genEmployeesPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.EMPLOYEES)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Редактирование сотрудника</Typography.Title>

        <EmployeesEditPageForm />
      </Col>
    </Row>
  )
}
