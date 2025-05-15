import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../../api/api'
import { genTransactionsPagePath } from '../../../../format/path.format'
import { modalActions } from '../../../common/modal/modal.slice'
import { transactionsCreatePageModalConfirmActions } from './transactions-create-page-modal-confirm.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* payTransaction(action: ReturnType<typeof transactionsCreatePageModalConfirmActions.payTransaction>) {
  try {
    const { transactionId, studioId } = action.payload
    yield callApi(api.transactionsService.paid, transactionId)

    yield put(transactionsCreatePageModalConfirmActions.payTransactionSuccess())
    yield put(modalActions.closeLast())
    yield put(push(genTransactionsPagePath(studioId)))
  } catch (e) {
    yield put(transactionsCreatePageModalConfirmActions.payTransactionError(new Error()))
  }
}

export function* transactionsCreatePageModalConfirmSagas() {
  yield takeLatest(transactionsCreatePageModalConfirmActions.payTransaction.type, payTransaction)
}
