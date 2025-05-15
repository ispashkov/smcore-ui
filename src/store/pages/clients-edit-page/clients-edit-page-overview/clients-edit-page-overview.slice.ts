import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ClientsCategoriesApi } from '../../../../api/types/clients-categories-api.types'
import { ClientsEditPageOverviewUpdateClientPayload } from './clients-edit-page-overview.types'

export interface ClientsEditPageOverviewState {
  clientsCategories: Nullable<Pagination<ClientsCategoriesApi.ClientCategory>>
  isLoading: boolean
  isLoaded: boolean
  isUpdating: boolean
  error: Nullable<Error>
}

const initialState: ClientsEditPageOverviewState = {
  clientsCategories: null,
  isLoading: false,
  isLoaded: false,
  isUpdating: false,
  error: null,
}

export const { actions: clientsEditPageOverviewActions, reducer: clientsEditPageOverviewReducer } = createSlice({
  name: '@@clients-edit-page-overview',
  initialState,
  reducers: {
    fetchClientsCategories: (state: Draft<ClientsEditPageOverviewState>) => {
      state.isLoading = true
    },
    fetchClientsCategoriesSuccess: (
      state: Draft<ClientsEditPageOverviewState>,
      action: PayloadAction<Nullable<Pagination<ClientsCategoriesApi.ClientCategory>>>
    ) => {
      state.clientsCategories = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchClientsCategoriesError: (state: Draft<ClientsEditPageOverviewState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    updateClient: (
      state: Draft<ClientsEditPageOverviewState>,
      _: PayloadAction<ClientsEditPageOverviewUpdateClientPayload>
    ) => {
      state.isUpdating = true
    },
    updateClientSuccess: (state: Draft<ClientsEditPageOverviewState>) => {
      state.isUpdating = false
    },
    updateClientError: (state: Draft<ClientsEditPageOverviewState>, action: PayloadAction<Error>) => {
      state.isUpdating = false
      state.error = action.payload
    },

    reset: () => initialState,
  },
})
