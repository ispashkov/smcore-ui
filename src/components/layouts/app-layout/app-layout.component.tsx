import * as React from 'react'
import { Layout } from 'antd'

import { NString, Nullable } from '../../../types/lang.types'
import { AppModalQueueItem } from '../../../types/modal.types'
import { AppLayoutModalController } from './app-layout-modal-controller/app-layout-modal-controller.component'
import { AppLayoutSidebar } from './app-layout-sidebar/app-layout-sidebar.component'
import { AppLayoutSidebarMenuItem } from './app-layout-sidebar/app-layout-sidebar.types'
import { AppLayoutTopBar } from './app-layout-top-bar/app-layout-top-bar.component'
import { AppLayoutTopBarStudio, AppLayoutTopBarMenu } from './app-layout-top-bar/app-layout-top-bar.types'
import './app-layout.styles.less'

interface Props extends React.PropsWithChildren {
  topBarStudios: Nullable<AppLayoutTopBarStudio[]>
  topBarMenuItems: AppLayoutTopBarMenu[]
  sideBarMenuItems: AppLayoutSidebarMenuItem[]

  selectedStudioId: NString

  activeModal: Nullable<AppModalQueueItem>
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props
  const { topBarStudios, topBarMenuItems, sideBarMenuItems } = props
  const { activeModal, selectedStudioId } = props

  return (
    <Layout className="app-layout">
      <AppLayoutTopBar
        className="app-layout__header"
        menuItems={topBarMenuItems}
        studios={topBarStudios}
        selectedStudioId={selectedStudioId}
      />

      <Layout>
        <AppLayoutSidebar className="app-layout__sidebar" items={sideBarMenuItems} />

        <Layout.Content className="app-layout__content">{children}</Layout.Content>
      </Layout>

      <AppLayoutModalController activeModal={activeModal} />
    </Layout>
  )
}
