import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { TransactionsApi } from '../../../api/types/transactions-api.types'
import { Pagination } from '../../../api/types/api.types'
import { TransactionsPageParams } from '../../../pages/transactions-page/transactions-page.types'

export interface TransactionsPageState {
  transactions: Nullable<Pagination<TransactionsApi.Transaction>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: TransactionsPageState = {
  transactions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: transactionsPageActions, reducer: transactionsPageReducer } = createSlice({
  name: '@@transactions-page',
  initialState,
  reducers: {
    fetchAllTransactions: (state: Draft<TransactionsPageState>, _: PayloadAction<TransactionsPageParams>) => {
      state.isLoading = true
    },
    fetchAllTransactionsSuccess: (
      state: Draft<TransactionsPageState>,
      action: PayloadAction<Nullable<Pagination<TransactionsApi.Transaction>>>
    ) => {
      state.transactions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllTransactionsError: (state: Draft<TransactionsPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    reset: () => initialState,
  },
})
