import { put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { callApi } from '../../../../utils/sagas.utils'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { clientsEditPagePurchasesActions } from './clients-edit-page-purchases.slice'

export function* fetchTransactions(action: ReturnType<typeof clientsEditPagePurchasesActions.fetchTransactions>) {
  try {
    const { clientId, page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.clientsTransactionsService.fetchAll>> = yield callApi(
      api.clientsTransactionsService.fetchAll,
      clientId,
      params
    )

    yield put(clientsEditPagePurchasesActions.fetchTransactionsSuccess(response.data))
  } catch {
    yield put(clientsEditPagePurchasesActions.fetchTransactionsError(new Error()))
  }
}

export function* clientsEditPagePurchasesSagas() {
  yield takeLatest(clientsEditPagePurchasesActions.fetchTransactions.type, fetchTransactions)
}
