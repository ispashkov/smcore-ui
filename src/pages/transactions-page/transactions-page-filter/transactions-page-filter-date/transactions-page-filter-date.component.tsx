import * as React from 'react'
import { Button, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export const TransactionsPageFilterDate: React.FC = () => {
  return (
    <Dropdown overlay={<></>}>
      <Button>
        <Space>
          Дата
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}
