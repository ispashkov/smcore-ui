import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { TransactionsCreatePageModalConfirmPayTransactionPayload } from './transactions-create-page-modal-confirm.types'

export interface TransactionsCreatePageModalConfirmState {
  isLoading: boolean
  isPaid: boolean
  error: Nullable<Error>
}

const initialState: TransactionsCreatePageModalConfirmState = {
  isLoading: false,
  isPaid: false,
  error: null,
}

export const {
  actions: transactionsCreatePageModalConfirmActions,
  reducer: transactionsCreatePageModalConfirmReducer,
} = createSlice({
  name: '@@transactions-create-page-modal-confirm',
  initialState,
  reducers: {
    payTransaction: (
      state: Draft<TransactionsCreatePageModalConfirmState>,
      _: PayloadAction<TransactionsCreatePageModalConfirmPayTransactionPayload>
    ) => {
      state.isLoading = true
    },
    payTransactionSuccess: (state: Draft<TransactionsCreatePageModalConfirmState>) => {
      state.isLoading = false
      state.isPaid = true
    },
    payTransactionError: (state: Draft<TransactionsCreatePageModalConfirmState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
    },
    reset: () => initialState,
  },
})
