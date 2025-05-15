import * as React from 'react'
import { Button, Layout, Typography } from 'antd'

import { Logo } from '../../icons/logo.component'
import './auth-layout.styles.less'

interface Props {
  onLogin: () => void
}

export const AuthLayout: React.FC<Props> = props => {
  const { onLogin } = props

  return (
    <Layout className="auth-layout">
      <Logo />

      <Typography.Text>Необходимо войти в систему</Typography.Text>

      <Button size="large" type="primary" onClick={onLogin}>
        Вход
      </Button>
    </Layout>
  )
}
