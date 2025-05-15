import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genProductsPagePath } from '../../../format/path.format'
import { productsServicesCreatePageActions } from './products-services-create-page.slice'
import { ProductsPageSection } from '../../../pages/products-page/products-page.types'
import { genProductsServicesDTO } from '../../../mapping/products-services.mapping'
import { ProductsServicesApi } from '../../../api/types/products-services-api.types'
import { callApi } from '../../../utils/sagas.utils'

export function* createService(action: ReturnType<typeof productsServicesCreatePageActions.createService>) {
  try {
    const servicesDTO = genProductsServicesDTO(action.payload) as ProductsServicesApi.ProductCreateDTO

    yield callApi(api.productsServicesService.create, servicesDTO)

    yield put(productsServicesCreatePageActions.createServiceSuccess())
    yield put(push(genProductsPagePath(ProductsPageSection.SERVICES)))
  } catch (e) {
    console.error(e)
    yield put(productsServicesCreatePageActions.createServiceError(new Error()))
  }
}

export function* fetchAllDirections(_: ReturnType<typeof productsServicesCreatePageActions.fetchAllDirections>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>> = yield callApi(
      api.exercisesDirectionsService.fetchAll,
      {
        size: 100,
      }
    )

    yield put(productsServicesCreatePageActions.fetchAllDirectionsSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsServicesCreatePageActions.fetchDirectionsError(new Error()))
  }
}

export function* fetchAllStudios(_: ReturnType<typeof productsServicesCreatePageActions.fetchAllStudios>) {
  try {
    const response: Awaited<ReturnType<typeof api.studiosService.fetchAll>> = yield callApi(
      api.studiosService.fetchAll,
      {
        size: 100,
      }
    )

    yield put(productsServicesCreatePageActions.fetchAllStudiosSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsServicesCreatePageActions.fetchStudiosError(new Error()))
  }
}

export function* fetchAllExercises(_: ReturnType<typeof productsServicesCreatePageActions.fetchAllExercises>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>> = yield callApi(
      api.exercisesTypesService.fetchAll,
      {
        size: 100,
      }
    )

    yield put(productsServicesCreatePageActions.fetchAllExercisesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(productsServicesCreatePageActions.fetchExercisesError(new Error()))
  }
}

export function* productsServicesCreatePageSagas() {
  yield takeLatest(productsServicesCreatePageActions.createService, createService)
  yield takeLatest(productsServicesCreatePageActions.fetchAllDirections, fetchAllDirections)
  yield takeLatest(productsServicesCreatePageActions.fetchAllStudios, fetchAllStudios)
  yield takeLatest(productsServicesCreatePageActions.fetchAllExercises, fetchAllExercises)
}
