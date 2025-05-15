import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { EmployeesApi } from '../../../api/types/employees-api.types'
import { EmployeesPositionsApi } from '../../../api/types/employees-positions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Pagination } from '../../../api/types/api.types'
import { Nullable } from '../../../types/lang.types'
import {
  EmployeesEditPageDataSuccessPayload,
  EmployeesEditPageUpdateEmployeePayload,
} from './employees-edit-page.types'

export interface EmployeesEditPageState {
  employee: Nullable<EmployeesApi.Employee>
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  positions: Nullable<Pagination<EmployeesPositionsApi.EmployeePosition>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: EmployeesEditPageState = {
  employee: null,
  franchises: null,
  positions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: employeesEditPageActions, reducer: employeesEditPageReducer } = createSlice({
  name: '@@employees-edit-page',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<EmployeesEditPageState>, action: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<EmployeesEditPageState>,
      action: PayloadAction<EmployeesEditPageDataSuccessPayload>
    ) => {
      const { employee, franchises, positions } = action.payload

      state.employee = employee
      state.franchises = franchises
      state.positions = positions
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<EmployeesEditPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    updateEmployee: (
      state: Draft<EmployeesEditPageState>,
      _: PayloadAction<EmployeesEditPageUpdateEmployeePayload>
    ) => {
      state.isLoading = true
    },
    updateEmployeeSuccess: (state: Draft<EmployeesEditPageState>) => {
      state.isLoading = false
    },
    updateEmployeeError: (state: Draft<EmployeesEditPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
