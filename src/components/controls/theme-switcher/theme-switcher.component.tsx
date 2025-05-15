import * as React from 'react'
import { Button } from 'antd'
import { BulbOutlined, BulbFilled } from '@ant-design/icons'

import { Theme } from '../../../types/theme.types'
import '../../../containers/app-theme-switcher/app-theme-switcher.styles.less'

interface Props {
  className?: string
  theme: Theme
  onSwitchTheme: () => void
}

export const ThemeSwitcher: React.FC<Props> = props => {
  const { className } = props
  const { theme, onSwitchTheme } = props

  const icon = React.useMemo(() => {
    return theme === 'light' ? <BulbFilled /> : <BulbOutlined />
  }, [theme])

  return <Button className={className} type="primary" shape="circle" size="large" icon={icon} onClick={onSwitchTheme} />
}
