import * as React from 'react'
import { Button, Form } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import './schedule-form-slot-add.styles.less'

interface Props {
  onAdd: () => void
}

export const ScheduleFormSlotAdd: React.FC<Props> = props => {
  const { onAdd } = props

  return (
    <Form.Item className="schedule-form-slot-add">
      <Button type="primary" size="middle" icon={<PlusCircleOutlined />} onClick={onAdd} block ghost>
        Добавить
      </Button>
    </Form.Item>
  )
}
