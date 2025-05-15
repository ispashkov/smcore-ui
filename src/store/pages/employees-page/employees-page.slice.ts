import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { EmployeesPageParams } from '../../../pages/employees-page/employees-page.types'

export interface EmployeesPageState {
  employees: Nullable<Pagination<EmployeesApi.Employee>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: EmployeesPageState = {
  employees: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: employeesPageActions, reducer: employeesPageReducer } = createSlice({
  name: '@@employees-page',
  initialState,
  reducers: {
    fetchAllEmployees: (state: Draft<EmployeesPageState>, _: PayloadAction<EmployeesPageParams>) => {
      state.isLoading = true
    },
    fetchAllEmployeesSuccess: (
      state: Draft<EmployeesPageState>,
      action: PayloadAction<Nullable<Pagination<EmployeesApi.Employee>>>
    ) => {
      state.employees = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllEmployeesError: (state: Draft<EmployeesPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeEmployee: (state: Draft<EmployeesPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeEmployeeSuccess: (state: Draft<EmployeesPageState>) => {
      state.isLoading = false
    },
    removeEmployeeError: (state: Draft<EmployeesPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
