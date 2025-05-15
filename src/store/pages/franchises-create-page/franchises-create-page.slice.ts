import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { FranchisesFormValues } from '../../../components/franchises/franchises-form/franchises-form.types'

export interface FranchisesCreatePageState {
  customers: Nullable<Pagination<EmployeesApi.Employee>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: FranchisesCreatePageState = {
  customers: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: franchisesCreatePageActions, reducer: franchisesCreatePageReducer } = createSlice({
  name: '@@franchises-create-page',
  initialState,
  reducers: {
    createFranchise: (state: Draft<FranchisesCreatePageState>, _: PayloadAction<FranchisesFormValues>) => {
      state.isLoading = true
    },
    createFranchiseSuccess: (state: Draft<FranchisesCreatePageState>) => {
      state.isLoading = false
    },
    createFranchiseError: (state: Draft<FranchisesCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    fetchAllCustomers: (state: Draft<FranchisesCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllCustomersSuccess: (
      state: Draft<FranchisesCreatePageState>,
      action: PayloadAction<Nullable<Pagination<EmployeesApi.Employee>>>
    ) => {
      state.customers = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllCustomersSuccessError: (state: Draft<FranchisesCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
