import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { ClientsApi } from '../../../../api/types/clients-api.types'

export interface ClientsEditPageCommonState {
  client: Nullable<ClientsApi.Client>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ClientsEditPageCommonState = {
  client: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: clientsEditPageCommonActions, reducer: clientsEditPageCommonReducer } = createSlice({
  name: '@@clients-edit-page-common',
  initialState,
  reducers: {
    fetchClient: (state: Draft<ClientsEditPageCommonState>, _action: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchClientSuccess: (
      state: Draft<ClientsEditPageCommonState>,
      action: PayloadAction<Nullable<ClientsApi.Client>>
    ) => {
      state.client = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchClientError: (state: Draft<ClientsEditPageCommonState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    reset: () => initialState,
  },
})
