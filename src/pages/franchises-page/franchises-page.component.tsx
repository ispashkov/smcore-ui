import * as React from 'react'

import { FranchisesPageTopBar } from './franchises-page-top-bar/franchises-page-top-bar.component'
import { FranchisesPageTable } from './franchises-page-table/franchises-page-table.component'
import { useFranchisesPage } from './franchises-page.hook'

export const FranchisesPage = () => {
  useFranchisesPage()

  return (
    <>
      <FranchisesPageTopBar />
      <FranchisesPageTable />
    </>
  )
}
