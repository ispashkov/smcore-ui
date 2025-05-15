import * as React from 'react'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { useTransactionsCreatePageAdd } from './transactions-create-page-add.hook'
import './transactions-create-page-add.styles.less'

export const TransactionsCreatePageAdd: React.FC = () => {
  const { onAddHandler } = useTransactionsCreatePageAdd()

  return (
    <div className="transactions-create-page-add">
      <Button type="primary" icon={<PlusCircleOutlined />} ghost onClick={onAddHandler}>
        Добавить товар
      </Button>
    </div>
  )
}
