import * as React from 'react'
import { Typography } from 'antd'

import { useTransactionsCreatePageTotal } from './transactions-create-page-total.hook'
import './transactions-create-page-total.styles.less'

interface Props {
  className?: string
}

export const TransactionsCreatePageTotal: React.FC<Props> = props => {
  const { total } = useTransactionsCreatePageTotal()

  return (
    <Typography.Title className="transactions-create-page-total" level={3}>
      Итого:
      <span className="transactions-create-page-total__price">{total}</span>
    </Typography.Title>
  )
}
