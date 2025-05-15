import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Typography, Layout, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { clsx } from 'clsx'

import { genHomePagePath, genSchedulePagePath } from '../../../../format/path.format'
import { isDef, isDefAndNotEmpty, NString, Nullable } from '../../../../types/lang.types'
import { Logo } from '../../../icons/logo.component'
import { genSelectedKeys } from './app-layout-top-bar.utils'
import { AppLayoutTopBarStudio, AppLayoutTopBarMenu } from './app-layout-top-bar.types'
import './app-layout-top-bar.styles.less'

interface Props {
  className?: string
  menuItems: AppLayoutTopBarMenu[]
  studios: Nullable<AppLayoutTopBarStudio[]>
  selectedStudioId: NString
}

export const AppLayoutTopBar: React.FC<Props> = props => {
  const { className } = props
  const { menuItems, studios, selectedStudioId } = props

  const { pathname, search } = useLocation()

  const selectedKeys = React.useMemo(() => {
    if (isDef(selectedStudioId)) {
      return [selectedStudioId]
    }
  }, [selectedStudioId])

  const selectedStudioTitle = React.useMemo(() => {
    if (isDefAndNotEmpty(studios)) {
      const studio = studios.find(s => s.id === selectedStudioId)
      if (isDef(studio)) {
        return studio.title
      }

      return null
    }
  }, [selectedStudioId, studios])

  return (
    <Layout.Header className={clsx('app-layout-top-bar', className)}>
      <Link className="app-layout-top-bar-logo" to={genHomePagePath()}>
        <Logo className="app-layout-top-bar-logo__icon" />
      </Link>

      {isDefAndNotEmpty(studios) && (
        <Dropdown
          className="app-layout-top-bar-studios"
          overlay={
            <Menu selectedKeys={selectedKeys}>
              {studios.map(studio => (
                <Menu.Item key={studio.id}>
                  <Link to={genSchedulePagePath(studio.id)}>
                    <Typography.Text>{studio.title}</Typography.Text>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <Button type="text">
            {selectedStudioTitle || 'Выберите студию'}
            <DownOutlined />
          </Button>
        </Dropdown>
      )}

      <div className="app-layout-top-bar-menu">
        {menuItems.map(menu => {
          const { Icon, items, title } = menu
          const selectedKeys = genSelectedKeys(items, pathname, search)

          return (
            <Dropdown
              key={title}
              className="app-layout-top-bar-menu__dropdown"
              overlay={
                <Menu selectedKeys={selectedKeys}>
                  {items.map(menuItem => (
                    <Menu.Item key={menuItem.title} onClick={menuItem.onClick}>
                      {menuItem.path ? <Link to={menuItem.path}>{menuItem.title}</Link> : menuItem.title}
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <Button type="text">
                {title}
                <Icon />
              </Button>
            </Dropdown>
          )
        })}
      </div>
    </Layout.Header>
  )
}
