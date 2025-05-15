import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genFranchisesPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { FranchisesCreatePageForm } from './franchises-create-page-form/franchises-create-page-form.component'
import { useFranchisesCreatePage } from './franchises-create-page.hook'
import './franchises-create-page.styles.less'

export const FranchisesCreatePage = () => {
  useFranchisesCreatePage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genFranchisesPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.FRANCHISES)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Создание франшизы</Typography.Title>

        <FranchisesCreatePageForm />
      </Col>
    </Row>
  )
}
