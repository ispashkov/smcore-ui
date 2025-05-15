import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { genTransactionsPagePath } from '../../../format/path.format'
import { formatPathName } from '../../../format/text.format'
import { AppPath } from '../../../types/path.types'
import { useTransactionsCreatePageParams } from '../transactions-create-page-hooks/transactions-create-page-params.hook'
import './transactions-create-page-header.styles.less'

export const TransactionsCreatePageHeader: React.FC = () => {
  const { studioId } = useTransactionsCreatePageParams()
  return (
    <div className="transactions-create-page-header">
      <Link to={genTransactionsPagePath(studioId)}>
        <Button className="transactions-create-page-header__button" type="text" icon={<LeftOutlined />} size="small">
          <Typography.Text>{formatPathName(AppPath.TRANSACTIONS)}</Typography.Text>
        </Button>
      </Link>

      <Typography.Title level={2}>{formatPathName(AppPath.TRANSACTIONS_CREATE)}</Typography.Title>
    </div>
  )
}
