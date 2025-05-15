import * as React from 'react'

import { useTheme } from '../../hooks/use-theme.hook'
import { ThemeSwitcher } from '../../components/controls/theme-switcher/theme-switcher.component'
import './app-theme-switcher.styles.less'

interface Props {
  className?: string
}

export const AppThemeSwitcherContainer: React.FC<Props> = props => {
  const { theme, onSwitchTheme } = useTheme()

  return <ThemeSwitcher className="app-theme-switcher" theme={theme} onSwitchTheme={onSwitchTheme} />
}
