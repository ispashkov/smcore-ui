import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { mapEmployeesToEmployeesTableRowList } from '../../../mapping/employees.mapping'

const getEmployeesInternal = (state: AppState): Nullable<Pagination<EmployeesApi.Employee>> =>
  state.employeesPage.employees

export const genEmployeesIsLoading = (state: AppState): boolean => state.employeesPage.isLoading

export const genEmployeesTableRowList = createSelector(getEmployeesInternal, employees =>
  mapEmployeesToEmployeesTableRowList(employees?.content)
)

export const genEmployeesTotalElements = createSelector(getEmployeesInternal, employees => employees?.totalElements)
