import { put, select, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { transactionsCreatePageModalProductsActions } from './transactions-create-page-modal-products.slice'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { getTransactionsCreatePageModalProductsMapById } from './transactions-create-page-modal-products.selectors'
import { isDef } from '../../../../types/lang.types'
import { transactionsCreatePageTableActions } from '../transactions-create-page-table/transactions-create-page-table.slice'
import { mapProductToCountable } from '../../../../mapping/products.mapping'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchProducts(action: ReturnType<typeof transactionsCreatePageModalProductsActions.fetchProducts>) {
  try {
    const { page, size, name } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.productService.fetchAll>> = yield callApi(
      api.productService.fetchAll,
      {
        ...params,
        name,
      }
    )

    yield put(transactionsCreatePageModalProductsActions.fetchProductsSuccess(response.data))
  } catch (e) {
    yield put(transactionsCreatePageModalProductsActions.fetchProductsError(new Error()))
  }
}

export function* addProduct(action: ReturnType<typeof transactionsCreatePageModalProductsActions.addProduct>) {
  const productsMap: ReturnType<typeof getTransactionsCreatePageModalProductsMapById> = yield select(
    getTransactionsCreatePageModalProductsMapById
  )

  if (isDef(productsMap)) {
    const product = productsMap[action.payload]

    if (isDef(product)) {
      const countableProduct = mapProductToCountable(product)
      yield put(transactionsCreatePageTableActions.addProduct(countableProduct))
    }
  }
}

export function* transactionsCreatePageModalProductsSagas() {
  yield takeLatest(transactionsCreatePageModalProductsActions.fetchProducts.type, fetchProducts)
  yield takeLatest(transactionsCreatePageModalProductsActions.addProduct.type, addProduct)
}
