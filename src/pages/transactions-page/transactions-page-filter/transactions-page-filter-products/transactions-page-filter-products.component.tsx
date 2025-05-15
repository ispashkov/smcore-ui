import * as React from 'react'
import { Button, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export const TransactionsPageFilterProducts: React.FC = () => {
  return (
    <Dropdown overlay={<></>}>
      <Button>
        <Space>
          Товары
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}
