import * as React from 'react'

import { useDirectionsPage } from './directions-page.hook'
import { DirectionsPageTopBar } from './directions-page-top-bar/directions-page-top-bar.component'
import { DirectionsPageTable } from './directions-page-table/directions-page-table.component'

export const DirectionsPage = () => {
  useDirectionsPage()

  return (
    <>
      <DirectionsPageTopBar />
      <DirectionsPageTable />
    </>
  )
}
