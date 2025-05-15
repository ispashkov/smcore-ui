import * as React from 'react'
import { Button, Space } from 'antd'
import { EditOutlined, MinusOutlined } from '@ant-design/icons'

interface Props {
  onEdit: () => void
  onRemove: () => void
}

export const TableCellActions: React.FC<Props> = props => {
  const { onEdit, onRemove } = props

  return (
    <Space size="middle">
      <Button icon={<EditOutlined />} size="middle" onClick={onEdit} />
      <Button icon={<MinusOutlined />} size="middle" danger onClick={onRemove} />
    </Space>
  )
}
