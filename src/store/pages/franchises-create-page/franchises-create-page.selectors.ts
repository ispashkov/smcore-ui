import { createSelector } from '@reduxjs/toolkit'

import { mapEmployeesToOptions } from '../../../mapping/employees.mapping'
import { AppState } from '../../app.store'

const getCustomersInternal = (state: AppState) => state.franchisesCreatePage.customers

export const getCustomersOptions = createSelector(getCustomersInternal, customers =>
  mapEmployeesToOptions(customers?.content)
)
