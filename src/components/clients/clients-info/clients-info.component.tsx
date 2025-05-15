import * as React from 'react'
import { Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { clsx } from 'clsx'

import { ClientsInfoProps } from './clients-info.types'
import './clients-info.styles.less'

export const ClientsInfo: React.FC<ClientsInfoProps> = props => {
  const { className } = props
  const { name, photo, phone } = props

  return (
    <div className={clsx('clients-info', className)}>
      <Avatar
        className="clients-info__avatar"
        src={photo}
        icon={<UserOutlined />}
        alt={name}
        size={64}
        shape="square"
      />

      <Typography.Title level={4} className="clients-info__name">
        {name}
      </Typography.Title>

      <Typography.Text className="clients-info__phone" type="secondary">
        {phone}
      </Typography.Text>
    </div>
  )
}
