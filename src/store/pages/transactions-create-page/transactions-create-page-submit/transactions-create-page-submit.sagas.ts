import { put, select, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { genTransactionDTO } from '../../../../mapping/transactions.mapping'
import { isDef } from '../../../../types/lang.types'
import { AppModal } from '../../../../types/modal.types'
import { api } from '../../../../api/api'
import { PaymentMethod } from '../../../../api/types/api.types'
import { genTransactionsPagePath } from '../../../../format/path.format'
import { getCurrentStudioId } from '../../../common/layout/layout.selectors'
import { modalActions } from '../../../common/modal/modal.slice'
import { getTransactionsCreatePageTableProducts } from '../transactions-create-page-table/transactions-create-page-table.selectors'
import { transactionsCreatePageSubmitActions } from './transactions-create-page-submit.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* createTransaction(action: ReturnType<typeof transactionsCreatePageSubmitActions.createTransaction>) {
  try {
    const studioId: ReturnType<typeof getCurrentStudioId> = yield select(getCurrentStudioId)
    const products: ReturnType<typeof getTransactionsCreatePageTableProducts> = yield select(
      getTransactionsCreatePageTableProducts
    )

    const transactionDTO = genTransactionDTO(action.payload, studioId, products)

    if (isDef(transactionDTO) && isDef(studioId)) {
      const response: Awaited<ReturnType<typeof api.transactionsService.create>> = yield callApi(
        api.transactionsService.create,
        transactionDTO
      )

      const { id, toPay } = response.data
      const { paymentMethod } = transactionDTO

      if (paymentMethod === PaymentMethod.CARD || paymentMethod === PaymentMethod.CASH) {
        yield put(transactionsCreatePageSubmitActions.createTransactionSuccess())
        yield put(
          modalActions.show({
            modal: AppModal.TRANSACTIONS_CREATE_PAGE_MODAL_CONFIRM,
            props: { transactionId: id, transactionTotal: toPay, studioId },
          })
        )
      } else {
        yield put(push(genTransactionsPagePath(studioId)))
      }
    } else {
      yield put(transactionsCreatePageSubmitActions.createTransactionError(new Error()))
    }
  } catch (e) {
    yield put(transactionsCreatePageSubmitActions.createTransactionError(new Error()))
  }
}

export function* transactionsCreatePageSubmitSagas() {
  yield takeLatest(transactionsCreatePageSubmitActions.createTransaction.type, createTransaction)
}
