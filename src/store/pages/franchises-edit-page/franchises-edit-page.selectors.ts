import { createSelector } from '@reduxjs/toolkit'

import { mapEmployeesToOptions } from '../../../mapping/employees.mapping'
import { genFranchiseFormValues } from '../../../mapping/franchises.mapping'
import { AppState } from '../../app.store'

const getFranchiseInternal = (state: AppState) => state.franchisesEditPage.franchise
const getCustomersInternal = (state: AppState) => state.franchisesEditPage.customers

export const getCustomersOptions = createSelector(getCustomersInternal, customers =>
  mapEmployeesToOptions(customers?.content)
)

export const getFranchiseFormValues = createSelector(getFranchiseInternal, genFranchiseFormValues)
