import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genFranchisesPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { FranchisesEditPageForm } from './franchises-edit-page-form/franchises-edit-page-form.component'
import { useFranchisesEditPage } from './franchises-edit-page.hook'
import './franchises-edit-page.styles.less'

export const FranchisesEditPage = () => {
  useFranchisesEditPage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genFranchisesPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.FRANCHISES)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Редактирование франшизы</Typography.Title>

        <FranchisesEditPageForm />
      </Col>
    </Row>
  )
}
