import * as React from 'react'

import { useEmployeesPage } from './employees-page.hook'
import { EmployeesPageTopBar } from './employees-page-top-bar/employees-page-top-bar.component'
import { EmployeesPageTable } from './employees-page-table/employees-page-table.component'

export const EmployeesPage = () => {
  useEmployeesPage()

  return (
    <>
      <EmployeesPageTopBar />
      <EmployeesPageTable />
    </>
  )
}
