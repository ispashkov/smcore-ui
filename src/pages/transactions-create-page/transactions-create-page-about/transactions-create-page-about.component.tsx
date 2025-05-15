import * as React from 'react'
import { Typography } from 'antd'
import './transactions-create-page-about.styles.less'

export const TransactionsCreatePageAbout: React.FC = () => {
  return (
    <Typography.Title className="transactions-create-page-about" level={3}>
      Об оплате
    </Typography.Title>
  )
}
