import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapFranchisesToOptions } from '../../../mapping/franchises.mapping'
import { mapEmployeesPositionsToOptions } from '../../../mapping/employees-positions.mapping'

const getFranchisesInternal = (state: AppState) => state.employeesCreatePage.franchises
const getEmployeesPositionsInternal = (state: AppState) => state.employeesCreatePage.positions

export const getFranchisesOptions = createSelector(getFranchisesInternal, franchises =>
  mapFranchisesToOptions(franchises?.content)
)

export const getEmployeesPositionsOptions = createSelector(getEmployeesPositionsInternal, employeesPositions =>
  mapEmployeesPositionsToOptions(employeesPositions?.content)
)
