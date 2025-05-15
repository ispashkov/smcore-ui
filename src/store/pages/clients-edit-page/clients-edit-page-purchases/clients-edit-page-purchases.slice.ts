import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { TransactionsApi } from '../../../../api/types/transactions-api.types'
import { Pagination } from '../../../../api/types/api.types'
import { ClientsEditPagePurchasesFetchTransactionsPayload } from './clients-edit-page-purchases.types'

export interface ClientsEditPagePurchasesState {
  transactions: Nullable<Pagination<TransactionsApi.Transaction>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ClientsEditPagePurchasesState = {
  transactions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: clientsEditPagePurchasesActions, reducer: clientsEditPagePurchasesReducer } = createSlice({
  name: '@@clients-edit-page-purchases',
  initialState,
  reducers: {
    fetchTransactions: (
      state: Draft<ClientsEditPagePurchasesState>,
      _: PayloadAction<ClientsEditPagePurchasesFetchTransactionsPayload>
    ) => {
      state.isLoading = true
    },
    fetchTransactionsSuccess: (
      state: Draft<ClientsEditPagePurchasesState>,
      action: PayloadAction<Nullable<Pagination<TransactionsApi.Transaction>>>
    ) => {
      state.transactions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchTransactionsError: (state: Draft<ClientsEditPagePurchasesState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    reset: () => initialState,
  },
})
