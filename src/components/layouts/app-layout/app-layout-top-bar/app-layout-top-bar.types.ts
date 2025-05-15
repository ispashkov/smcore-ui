import * as React from 'react'

export interface AppLayoutTopBarMenuItem {
  title: string
  path?: string
  onClick?: () => void
}

export interface AppLayoutTopBarMenu {
  title: string
  Icon: React.FC
  items: AppLayoutTopBarMenuItem[]
}

export interface AppLayoutTopBarStudio {
  id: string
  title: string
  offset: number
}
