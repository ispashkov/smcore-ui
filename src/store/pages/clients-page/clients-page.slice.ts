import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ClientsApi } from '../../../api/types/clients-api.types'
import { ClientsPageParams } from '../../../pages/clients-page/clients-page.types'

export interface ClientsPageState {
  clients: Nullable<Pagination<ClientsApi.Client>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ClientsPageState = {
  clients: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: clientsPageActions, reducer: clientsPageReducer } = createSlice({
  name: '@@clients-page',
  initialState,
  reducers: {
    fetchAllClients: (state: Draft<ClientsPageState>, _: PayloadAction<ClientsPageParams>) => {
      state.isLoading = true
    },
    fetchAllClientsSuccess: (
      state: Draft<ClientsPageState>,
      action: PayloadAction<Nullable<Pagination<ClientsApi.Client>>>
    ) => {
      state.clients = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllClientsError: (state: Draft<ClientsPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    removeClient: (state: Draft<ClientsPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeClientSuccess: (state: Draft<ClientsPageState>) => {
      state.isLoading = false
    },
    removeClientError: (state: Draft<ClientsPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
    },

    reset: () => initialState,
  },
})
