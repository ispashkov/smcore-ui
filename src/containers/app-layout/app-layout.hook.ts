import * as React from 'react'
import { useSelector } from 'react-redux'

import { api } from '../../api/api'
import { getActiveModal } from '../../store/common/modal/modal.selectors'
import { getLayoutStudios } from '../../store/common/layout/layout.selectors'
import { useStudio } from '../../hooks/use-studios.hook'
import { genAppLayoutSidebarMenu, genAppLayoutTopBarMenu } from './app-layout.utils'

export function useAppLayout() {
  const { studioId } = useStudio()

  const activeModal = useSelector(getActiveModal)
  const topBarStudios = useSelector(getLayoutStudios)

  const topBarMenu = React.useMemo(() => genAppLayoutTopBarMenu(api.logOut), [])
  const sidebarMenuItems = React.useMemo(() => genAppLayoutSidebarMenu(studioId), [studioId])

  return {
    topBarMenu,
    sidebarMenuItems,
    topBarStudios,
    selectedStudioId: studioId,
    activeModal,
  }
}
