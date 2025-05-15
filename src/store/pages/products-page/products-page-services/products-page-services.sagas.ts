import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../../api/api'
import { genProductsPageQueryParams } from '../../../../pages/products-page/products-page.utils'
import { genPaginationParamsDTO } from '../../../../utils/pagination.utils'
import { getRouterState } from '../../../common/router/router.selectors'
import { productsPageServicesActions } from './products-page-services.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchAllServices(action: ReturnType<typeof productsPageServicesActions.fetchAllServices>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.productsServicesService.fetchAll>> = yield callApi(
      api.productsServicesService.fetchAll,
      params
    )

    yield put(productsPageServicesActions.fetchAllServicesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsPageServicesActions.fetchAllServicesError(new Error()))
  }
}

export function* removeService(action: ReturnType<typeof productsPageServicesActions.removeService>) {
  try {
    yield callApi(api.productsServicesService.remove, action.payload)

    yield put(productsPageServicesActions.removeServiceSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genProductsPageQueryParams(search)

    yield put(productsPageServicesActions.fetchAllServices(params))
  } catch (e) {
    console.error(e)
    yield put(productsPageServicesActions.removeServiceError(new Error()))
  }
}

export function* productsPageServicesSagas() {
  yield takeLatest(productsPageServicesActions.fetchAllServices, fetchAllServices)
  yield takeLatest(productsPageServicesActions.removeService, removeService)
}
