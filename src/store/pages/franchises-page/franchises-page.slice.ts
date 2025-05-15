import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { FranchisesPageParams } from '../../../pages/franchises-page/franchises-page.types'

export interface FranchisesPageState {
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: FranchisesPageState = {
  franchises: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: franchisesPageActions, reducer: franchisesPageReducer } = createSlice({
  name: '@@franchises-page',
  initialState,
  reducers: {
    fetchAllFranchises: (state: Draft<FranchisesPageState>, _: PayloadAction<FranchisesPageParams>) => {
      state.isLoading = true
    },
    fetchAllFranchisesSuccess: (state, action: PayloadAction<Nullable<Pagination<OrganizationsApi.Organization>>>) => {
      state.franchises = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllFranchisesError: (state: Draft<FranchisesPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeFranchise: (state: Draft<FranchisesPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeFranchiseSuccess: (state: Draft<FranchisesPageState>) => {
      state.isLoading = false
    },
    removeFranchiseError: (state: Draft<FranchisesPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
