import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { productsSubscriptionsCreatePageActions } from './products-subscriptions-сreate-page.slice'
import { ProductsPageSection } from '../../../pages/products-page/products-page.types'
import { genProductsSubscriptionsDTO } from '../../../mapping/products-subscriptions.mapping'
import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'
import { callApi } from '../../../utils/sagas.utils'

export function* createService(action: ReturnType<typeof productsSubscriptionsCreatePageActions.createSubscription>) {
  try {
    const organizationDTO = genProductsSubscriptionsDTO(action.payload)

    const pathToCaller =
      organizationDTO.type === ProductsSubscriptionsApi.ProductSubscriptionType.GROUP
        ? ProductsPageSection.GROUP_SUBSCRIPTIONS
        : ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS

    yield callApi(api.productsSubscriptionsService.create, organizationDTO)

    yield put(productsSubscriptionsCreatePageActions.createSubscriptionSuccess())
    yield put(push(pathToCaller))
  } catch (e) {
    console.error(e)
    yield put(productsSubscriptionsCreatePageActions.createSubscriptionError(new Error()))
  }
}

export function* fetchAllDirections(_: ReturnType<typeof productsSubscriptionsCreatePageActions.fetchAllDirections>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>> = yield callApi(
      api.exercisesDirectionsService.fetchAll,
      {
        size: 100,
      }
    )
    yield put(productsSubscriptionsCreatePageActions.fetchAllDirectionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsSubscriptionsCreatePageActions.fetchDirectionsError(new Error()))
  }
}

export function* fetchAllStudios(_: ReturnType<typeof productsSubscriptionsCreatePageActions.fetchAllStudios>) {
  try {
    const response: Awaited<ReturnType<typeof api.studiosService.fetchAll>> = yield callApi(
      api.studiosService.fetchAll,
      {
        size: 100,
      }
    )
    yield put(productsSubscriptionsCreatePageActions.fetchAllStudiosSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsSubscriptionsCreatePageActions.fetchStudiosError(new Error()))
  }
}

export function* fetchAllExercises(_: ReturnType<typeof productsSubscriptionsCreatePageActions.fetchAllExercises>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>> = yield callApi(
      api.exercisesTypesService.fetchAll,
      {
        size: 100,
      }
    )
    yield put(productsSubscriptionsCreatePageActions.fetchAllExercisesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsSubscriptionsCreatePageActions.fetchExercisesError(new Error()))
  }
}

export function* productsSubscriptionsCreatePageSagas() {
  yield takeLatest(productsSubscriptionsCreatePageActions.createSubscription, createService)
  yield takeLatest(productsSubscriptionsCreatePageActions.fetchAllDirections, fetchAllDirections)
  yield takeLatest(productsSubscriptionsCreatePageActions.fetchAllStudios, fetchAllStudios)
  yield takeLatest(productsSubscriptionsCreatePageActions.fetchAllExercises, fetchAllExercises)
}
