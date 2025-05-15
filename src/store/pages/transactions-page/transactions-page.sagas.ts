import { put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../api/api'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { transactionsPageActions } from './transactions-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllTransactions(action: ReturnType<typeof transactionsPageActions.fetchAllTransactions>) {
  try {
    const { studioId, page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.transactionsService.fetchAll>> = yield callApi(
      api.transactionsService.fetchAll,
      {
        ...params,
        studioId,
        sort: 'createDate,desc',
      }
    )

    yield put(transactionsPageActions.fetchAllTransactionsSuccess(response.data))
  } catch (e) {
    yield put(transactionsPageActions.fetchAllTransactionsError(new Error()))
  }
}

export function* transactionsPageSagas() {
  yield takeLatest(transactionsPageActions.fetchAllTransactions.type, fetchAllTransactions)
}
