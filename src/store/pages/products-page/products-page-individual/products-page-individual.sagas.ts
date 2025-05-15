import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../../api/api'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'
import { genProductsPageQueryParams } from '../../../../pages/products-page/products-page.utils'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { getRouterState } from '../../../common/router/router.selectors'
import { productsPageIndividualActions } from './products-page-individual.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchAllSubscriptions(action: ReturnType<typeof productsPageIndividualActions.fetchAllSubscriptions>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.productsSubscriptionsService.fetchAll>> = yield callApi(
      api.productsSubscriptionsService.fetchAll,
      {
        ...params,
        type: ProductsSubscriptionsApi.ProductSubscriptionType.INDIVIDUAL,
      }
    )

    yield put(productsPageIndividualActions.fetchAllSubscriptionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsPageIndividualActions.fetchAllSubscriptionsError(new Error()))
  }
}

export function* removeSubscription(action: ReturnType<typeof productsPageIndividualActions.removeSubscription>) {
  try {
    yield callApi(api.productsSubscriptionsService.remove, action.payload)

    yield put(productsPageIndividualActions.removeSubscriptionSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genProductsPageQueryParams(search)

    yield put(productsPageIndividualActions.fetchAllSubscriptions(params))
  } catch (e) {
    console.error(e)
    yield put(productsPageIndividualActions.removeSubscriptionError(new Error()))
  }
}

export function* productsPageIndividualSagas() {
  yield takeLatest(productsPageIndividualActions.fetchAllSubscriptions, fetchAllSubscriptions)
  yield takeLatest(productsPageIndividualActions.removeSubscription, removeSubscription)
}
