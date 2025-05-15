import { combineReducers } from '@reduxjs/toolkit'

import { transactionsCreatePageModalProductsReducer } from './transactions-create-page-modal-products/transactions-create-page-modal-products.slice'
import { transactionsCreatePageModalConfirmReducer } from './transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.slice'
import { transactionsCreatePageTableReducer } from './transactions-create-page-table/transactions-create-page-table.slice'
import { transactionsCreatePageSubmitReducer } from './transactions-create-page-submit/transactions-create-page-submit.slice'

export const transactionsCreatePageReducer = combineReducers({
  transactionsCreatePageModalProducts: transactionsCreatePageModalProductsReducer,
  transactionsCreatePageModalConfirm: transactionsCreatePageModalConfirmReducer,
  transactionsCreatePageTable: transactionsCreatePageTableReducer,
  transactionsCreatePageSubmit: transactionsCreatePageSubmitReducer,
})
