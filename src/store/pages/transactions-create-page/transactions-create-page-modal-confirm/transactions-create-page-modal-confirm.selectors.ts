import { AppState } from '../../../app.store'

export const getTransactionsCreatePageModalConfirmIsLoading = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageModalConfirm.isLoading

export const getTransactionsCreatePageModalConfirmIsPaid = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageModalConfirm.isPaid
