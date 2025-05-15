import * as React from 'react'
import { Button } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'

interface Props {
  className?: string
}

export const QRButton: React.FC<Props> = props => {
  const { className } = props

  return (
    <Button className={className} type="primary" icon={<BarcodeOutlined />}>
      Штрих - код
    </Button>
  )
}
