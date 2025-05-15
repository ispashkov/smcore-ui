import * as React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { clsx } from 'clsx'

import { AppLayoutSidebarMenuItem } from './app-layout-sidebar.types'
import './app-layout-sidebar.styles.less'

interface Props {
  className?: string
  items: AppLayoutSidebarMenuItem[]
}

export const AppLayoutSidebar: React.FC<Props> = props => {
  const { className } = props
  const { items } = props
  const { pathname } = useLocation()

  const selectedKeys = React.useMemo(() => {
    const matched = items.find(item => matchPath(pathname, item.path))

    if (matched) {
      return [matched.path]
    }

    return undefined
  }, [items, pathname])

  return (
    <Layout.Sider className={clsx('app-layout-sidebar', className)}>
      <Menu
        className="app-layout-sidebar"
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        selectedKeys={selectedKeys}
        disabledOverflow={true}
      >
        {items.map(item => (
          <Menu.Item key={item.path} className="menu-item">
            <Link to={item.path}>
              <Typography.Text>{item.title}</Typography.Text>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  )
}
