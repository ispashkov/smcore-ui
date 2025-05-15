import * as React from 'react'
import { Tabs } from 'antd'

import { useClientsEditPageMenu } from './clients-edit-page-menu.hook'
import './clients-edit-page-menu.styles.less'

export const ClientsEditPageMenu: React.FC = () => {
  const { section, menuItems, onChangeHandler } = useClientsEditPageMenu()

  return <Tabs className="clients-edit-page-menu" items={menuItems} activeKey={section} onChange={onChangeHandler} />
}
