import { all, spawn } from 'redux-saga/effects'

import { transactionsCreatePageModalProductsSagas } from './transactions-create-page-modal-products/transactions-create-page-modal-products.sagas'
import { transactionsCreatePageSubmitSagas } from './transactions-create-page-submit/transactions-create-page-submit.sagas'
import { transactionsCreatePageModalConfirmSagas } from './transactions-create-page-modal-confirm/transactions-create-page-modal-confirm.sagas'

export function* transactionsCreatePageSagas() {
  yield all(
    [
      transactionsCreatePageModalProductsSagas,
      transactionsCreatePageSubmitSagas,
      transactionsCreatePageModalConfirmSagas,
    ].map(saga => spawn(saga))
  )
}
