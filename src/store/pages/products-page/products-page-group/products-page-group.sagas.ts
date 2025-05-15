import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../../api/api'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'
import { genProductsPageQueryParams } from '../../../../pages/products-page/products-page.utils'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { getRouterState } from '../../../common/router/router.selectors'
import { productsPageGroupActions } from './products-page-group.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchAllSubscriptions(action: ReturnType<typeof productsPageGroupActions.fetchAllSubscriptions>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.productsSubscriptionsService.fetchAll>> = yield callApi(
      api.productsSubscriptionsService.fetchAll,
      {
        ...params,
        type: ProductsSubscriptionsApi.ProductSubscriptionType.GROUP,
      }
    )

    yield put(productsPageGroupActions.fetchAllSubscriptionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsPageGroupActions.fetchAllSubscriptionsError(new Error()))
  }
}

export function* removeSubscription(action: ReturnType<typeof productsPageGroupActions.removeSubscription>) {
  try {
    yield callApi(api.productsSubscriptionsService.remove, action.payload)

    yield put(productsPageGroupActions.removeSubscriptionSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genProductsPageQueryParams(search)

    yield put(productsPageGroupActions.fetchAllSubscriptions(params))
  } catch (e) {
    console.error(e)
    yield put(productsPageGroupActions.removeSubscriptionError(new Error()))
  }
}

export function* productsPageGroupSagas() {
  yield takeLatest(productsPageGroupActions.fetchAllSubscriptions, fetchAllSubscriptions)
  yield takeLatest(productsPageGroupActions.removeSubscription, removeSubscription)
}
