import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { TransactionsFormValues } from '../../../../components/transactions/transactions-form/transactions-form.types'

export interface TransactionsCreatePageSubmitState {
  isLoading: boolean
  error: Nullable<Error>
}

const initialState: TransactionsCreatePageSubmitState = {
  isLoading: false,
  error: null,
}

export const { actions: transactionsCreatePageSubmitActions, reducer: transactionsCreatePageSubmitReducer } =
  createSlice({
    name: '@@transactions-create-page-submit',
    initialState,
    reducers: {
      createTransaction: (
        state: Draft<TransactionsCreatePageSubmitState>,
        _: PayloadAction<TransactionsFormValues>
      ) => {
        state.isLoading = true
      },
      createTransactionSuccess: (state: Draft<TransactionsCreatePageSubmitState>) => {
        state.isLoading = false
      },
      createTransactionError: (state: Draft<TransactionsCreatePageSubmitState>, action: PayloadAction<Error>) => {
        state.error = action.payload
        state.isLoading = false
      },

      reset: () => initialState,
    },
  })
