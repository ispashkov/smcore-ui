import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import {
  FranchiseEditPageUpdateFranchisePayload,
  FranchisesEditPageDataSuccessPayload,
} from './franchises-edit-page.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'

export interface FranchisesEditPageState {
  franchise: Nullable<OrganizationsApi.Organization>
  customers: Nullable<Pagination<EmployeesApi.Employee>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: FranchisesEditPageState = {
  franchise: null,
  customers: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: franchisesEditPageActions, reducer: franchisesEditPageReducer } = createSlice({
  name: '@@franchises-edit-page',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<FranchisesEditPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<FranchisesEditPageState>,
      action: PayloadAction<FranchisesEditPageDataSuccessPayload>
    ) => {
      const { franchise, customers } = action.payload

      state.franchise = franchise
      state.customers = customers
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<FranchisesEditPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    updateFranchise: (
      state: Draft<FranchisesEditPageState>,
      _: PayloadAction<FranchiseEditPageUpdateFranchisePayload>
    ) => {
      state.isLoading = true
    },
    updateFranchiseSuccess: (state: Draft<FranchisesEditPageState>) => {
      state.isLoading = false
    },
    updateFranchiseError: (state: Draft<FranchisesEditPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
