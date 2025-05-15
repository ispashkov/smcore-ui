import { createSelector } from '@reduxjs/toolkit'

import { mapFranchisesToOptions } from '../../../mapping/franchises.mapping'
import { mapEmployeesPositionsToOptions } from '../../../mapping/employees-positions.mapping'
import { genEmployeeFormValues } from '../../../mapping/employees.mapping'
import { AppState } from '../../app.store'

export const genEmployee = (state: AppState) => state.employeesEditPage.employee

const getFranchisesInternal = (state: AppState) => state.employeesEditPage.franchises
const getEmployeesPositionsInternal = (state: AppState) => state.employeesEditPage.positions

export const getEmployeesEditPageIsLoading = (state: AppState) => state.employeesEditPage.isLoading
export const getEmployeesEditPageIsLoaded = (state: AppState) => state.employeesEditPage.isLoaded

export const getEmployeeFormValues = createSelector(genEmployee, genEmployeeFormValues)

export const getFranchisesOptions = createSelector(getFranchisesInternal, franchises =>
  mapFranchisesToOptions(franchises?.content)
)

export const getEmployeesPositionsOptions = createSelector(getEmployeesPositionsInternal, employeesPositions =>
  mapEmployeesPositionsToOptions(employeesPositions?.content)
)
