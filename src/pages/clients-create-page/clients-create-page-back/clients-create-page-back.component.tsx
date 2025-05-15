import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genClientsPagePath } from '../../../format/path.format'
import { formatPathName } from '../../../format/text.format'
import { AppPath } from '../../../types/path.types'

import './clients-create-page-back.styles.less'

export const ClientsCreatePageBack: React.FC = props => {
  return (
    <Link className="clients-create-page-back" to={genClientsPagePath()}>
      <Button type="text" icon={<LeftOutlined />} size="small">
        <Typography.Text className="backBtnTitle">{formatPathName(AppPath.CLIENTS)}</Typography.Text>
      </Button>
    </Link>
  )
}
