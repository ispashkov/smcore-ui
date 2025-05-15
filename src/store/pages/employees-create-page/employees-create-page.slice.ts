import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { EmployeesFormValuesDTO } from '../../../components/employees/employees-form/employees-form.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesPositionsApi } from '../../../api/types/employees-positions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Nullable } from '../../../types/lang.types'
import { EmployeesCreatePageDataSuccessPayload } from './employees-create-page.types'

export interface EmployeesCreatePageState {
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  positions: Nullable<Pagination<EmployeesPositionsApi.EmployeePosition>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: EmployeesCreatePageState = {
  franchises: null,
  positions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: employeesCreatePageActions, reducer: employeesCreatePageReducer } = createSlice({
  name: '@@employees-create-page',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<EmployeesCreatePageState>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<EmployeesCreatePageState>,
      action: PayloadAction<EmployeesCreatePageDataSuccessPayload>
    ) => {
      const { franchises, positions } = action.payload

      state.franchises = franchises
      state.positions = positions
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<EmployeesCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    createEmployee: (state: Draft<EmployeesCreatePageState>, _: PayloadAction<EmployeesFormValuesDTO>) => {
      state.isLoading = true
    },
    createEmployeeSuccess: (state: Draft<EmployeesCreatePageState>) => {
      state.isLoading = false
    },
    createEmployeeError: (state: Draft<EmployeesCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
