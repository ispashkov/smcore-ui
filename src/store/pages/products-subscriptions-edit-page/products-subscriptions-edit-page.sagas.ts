import { all, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genProductsPagePath } from '../../../format/path.format'
import { ProductsPageSection } from '../../../pages/products-page/products-page.types'
import { productSubscriptionsEditPageActions } from './products-subscriptions-edit-page.slice'
import { genProductsSubscriptionsDTO } from '../../../mapping/products-subscriptions.mapping'
import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof productSubscriptionsEditPageActions.fetchPageData>) {
  try {
    const [subscription, studios, directions, exercises]: [
      Awaited<ReturnType<typeof api.productsSubscriptionsService.fetchById>>,
      Awaited<ReturnType<typeof api.studiosService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>>
    ] = yield all([
      callApi(api.productsSubscriptionsService.fetchById, action.payload),
      callApi(api.studiosService.fetchAll, {
        size: 100,
      }),
      callApi(api.exercisesDirectionsService.fetchAll, {
        size: 100,
      }),
      callApi(api.exercisesTypesService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(
      productSubscriptionsEditPageActions.fetchPageDataSuccess({
        subscription: subscription.data,
        studios: studios.data,
        directions: directions.data,
        exercises: exercises.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(productSubscriptionsEditPageActions.fetchPageDataError(new Error()))
  }
}

export function* updateSubscription(action: ReturnType<typeof productSubscriptionsEditPageActions.updateSubscription>) {
  try {
    const { id, data } = action.payload
    const organizationDTO = genProductsSubscriptionsDTO(data) as ProductsSubscriptionsApi.ProductSubscriptionDTO
    const pathToCaller =
      organizationDTO.type === ProductsSubscriptionsApi.ProductSubscriptionType.GROUP
        ? ProductsPageSection.GROUP_SUBSCRIPTIONS
        : ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS

    yield callApi(api.productsSubscriptionsService.update, id, organizationDTO)
    yield put(productSubscriptionsEditPageActions.updateSubscriptionSuccess())
    yield put(push(genProductsPagePath(pathToCaller)))
  } catch (e) {
    console.error(e)
    yield put(productSubscriptionsEditPageActions.updateSubscriptionError(new Error()))
  }
}

export function* productsSubscriptionsEditPageSagas() {
  yield takeLatest(productSubscriptionsEditPageActions.fetchPageData, fetchPageData)
  yield takeLatest(productSubscriptionsEditPageActions.updateSubscription, updateSubscription)
}
