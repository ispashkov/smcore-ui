import * as React from 'react'
import { Button, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { clsx } from 'clsx'

import { Days } from '../../../types/days.types'
import { DaysDropdownMenu } from './days-dropdown-menu/days-dropdown-menu.component'
import { genDaysDropdownMenuItems } from './days-dropdown.utils'
import './days-dropdown.styles.less'

interface Props {
  className?: string
  label: string
  onClick: (day: Days) => void
}

export const DaysDropdown: React.FC<Props> = props => {
  const { className } = props
  const { label, onClick } = props

  const trigger = React.useMemo<('click' | 'hover' | 'contextMenu')[]>(() => ['click'], [])
  const items = React.useMemo(genDaysDropdownMenuItems, [])

  return (
    <Dropdown
      className={clsx('days-dropdown', className)}
      trigger={trigger}
      overlay={<DaysDropdownMenu items={items} onClick={onClick} />}
    >
      <Button className="days-dropdown__button">
        <Space className="days-dropdown__space">
          {label}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}
