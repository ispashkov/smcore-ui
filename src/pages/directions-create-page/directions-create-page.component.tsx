import * as React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { genFranchisesPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { useDirectionsCreatePage } from './directions-create-page.hook'
import { DirectionsCreatePageForm } from './directions-create-page-form/directions-create-page-form.component'

import './directions-create-page.styles.less'

export const DirectionsCreatePage = () => {
  useDirectionsCreatePage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genFranchisesPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.DIRECTIONS)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Создание направления</Typography.Title>

        <DirectionsCreatePageForm />
      </Col>
    </Row>
  )
}
