import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ClientsFormValuesDTO } from '../../../components/clients/clients-form/clients-form.types'
import { ClientsCategoriesApi } from '../../../api/types/clients-categories-api.types'

export interface ClientsCreatePageState {
  clientsCategories: Nullable<Pagination<ClientsCategoriesApi.ClientCategory>>
  isLoading: boolean
  isLoaded: boolean
  isCreating: boolean
  error: Nullable<Error>
}

const initialState: ClientsCreatePageState = {
  clientsCategories: null,
  isLoading: false,
  isLoaded: false,
  isCreating: false,
  error: null,
}

export const { actions: clientsCreatePageActions, reducer: clientsCreatePageReducer } = createSlice({
  name: '@@clients-create-page',
  initialState,
  reducers: {
    fetchAllCategories: (state: Draft<ClientsCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllCategoriesSuccess: (
      state: Draft<ClientsCreatePageState>,
      action: PayloadAction<Nullable<Pagination<ClientsCategoriesApi.ClientCategory>>>
    ) => {
      state.clientsCategories = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllCategoriesError: (state: Draft<ClientsCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    createClient: (state: Draft<ClientsCreatePageState>, _: PayloadAction<ClientsFormValuesDTO>) => {
      state.isCreating = true
    },
    createClientSuccess: (state: Draft<ClientsCreatePageState>) => {
      state.isCreating = false
    },
    createClientError: (state: Draft<ClientsCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isCreating = false
    },

    reset: () => initialState,
  },
})
