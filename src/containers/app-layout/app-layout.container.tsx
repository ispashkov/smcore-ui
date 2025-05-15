import * as React from 'react'

import { AppLayout } from '../../components/layouts/app-layout/app-layout.component'
import { useAppLayout } from './app-layout.hook'

export const AppLayoutContainer: React.FC<React.PropsWithChildren> = props => {
  const { children } = props

  const { sidebarMenuItems, topBarMenu, topBarStudios, selectedStudioId, activeModal } = useAppLayout()

  return (
    <AppLayout
      sideBarMenuItems={sidebarMenuItems}
      topBarStudios={topBarStudios}
      topBarMenuItems={topBarMenu}
      selectedStudioId={selectedStudioId}
      activeModal={activeModal}
    >
      {children}
    </AppLayout>
  )
}
