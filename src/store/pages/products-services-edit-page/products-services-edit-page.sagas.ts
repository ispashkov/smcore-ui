import { all, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genProductsPagePath } from '../../../format/path.format'
import { productServicesEditPageActions } from './products-services-edit-page.slice'
import { genProductsServicesDTO } from '../../../mapping/products-services.mapping'
import { ProductsServicesApi } from '../../../api/types/products-services-api.types'
import { ProductsPageSection } from '../../../pages/products-page/products-page.types'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof productServicesEditPageActions.fetchPageData>) {
  try {
    const [service, studios, directions, exercises]: [
      Awaited<ReturnType<typeof api.productsServicesService.fetchById>>,
      Awaited<ReturnType<typeof api.studiosService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>>
    ] = yield all([
      callApi(api.productsServicesService.fetchById, action.payload),
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
      productServicesEditPageActions.fetchPageDataSuccess({
        service: service.data,
        studios: studios.data,
        directions: directions.data,
        exercises: exercises.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(productServicesEditPageActions.fetchPageDataError(new Error()))
  }
}

export function* updateService(action: ReturnType<typeof productServicesEditPageActions.updateService>) {
  try {
    const { id, data } = action.payload
    const organizationDTO = genProductsServicesDTO(data) as ProductsServicesApi.ProductEditDTO

    yield callApi(api.productsServicesService.update, id, organizationDTO)

    yield put(productServicesEditPageActions.updateServiceSuccess())
    yield put(push(genProductsPagePath(ProductsPageSection.SERVICES)))
  } catch (e) {
    console.error(e)
    yield put(productServicesEditPageActions.updateServiceError(new Error()))
  }
}

export function* productsServicesEditPageSagas() {
  yield takeLatest(productServicesEditPageActions.fetchPageData, fetchPageData)
  yield takeLatest(productServicesEditPageActions.updateService, updateService)
}
