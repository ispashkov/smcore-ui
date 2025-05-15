import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genDirectionsPagePath } from '../../format/path.format'
import { formatPathName } from '../../format/text.format'
import { AppPath } from '../../types/path.types'
import { DirectionsEditPageForm } from './directions-edit-page-form/directions-edit-page-form.component'
import { useDirectionsEditPage } from './directions-edit-page.hook'
import './directions-edit-page.styles.less'

export const DirectionsEditPage = () => {
  useDirectionsEditPage()

  return (
    <Row>
      <Col span={8}>
        <Button type="text" icon={<LeftOutlined />} size="small">
          <Link to={genDirectionsPagePath()}>
            <Typography.Text className="backBtnTitle">{formatPathName(AppPath.DIRECTIONS)}</Typography.Text>
          </Link>
        </Button>

        <Typography.Title level={2}>Редактирование направления</Typography.Title>

        <DirectionsEditPageForm />
      </Col>
    </Row>
  )
}
