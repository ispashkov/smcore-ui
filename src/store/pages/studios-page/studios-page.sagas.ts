import { all, put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../api/api'
import { genDirectionsPageParams } from '../../../pages/directions-page/directions-page.utils'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { getRouterState } from '../../common/router/router.selectors'
import { studiosPageActions } from './studios-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllStudios(action: ReturnType<typeof studiosPageActions.fetchAllStudios>) {
  try {
    const { page, size, orgId, city, directions, country } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const filterParams = {
      ...params,
      orgId,
      city,
      directions,
      country,
    }

    const response: Awaited<ReturnType<typeof api.studiosService.fetchAll>> = yield callApi(
      api.studiosService.fetchAll,
      filterParams
    )

    yield put(studiosPageActions.fetchAllStudiosSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(studiosPageActions.fetchAllStudiosError(new Error()))
  }
}

export function* fetchAllFilters() {
  try {
    const [studiosCitiesResponse, studiosCountriesResponse, organizationsResponse, directionsResponse]: [
      Awaited<ReturnType<typeof api.studiosService.fetchCities>>,
      Awaited<ReturnType<typeof api.studiosService.fetchCountries>>,
      Awaited<ReturnType<typeof api.organizationsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>
    ] = yield all([
      callApi(api.studiosService.fetchCities, {
        size: 100,
      }),
      callApi(api.studiosService.fetchCountries, {
        size: 100,
      }),
      callApi(api.organizationsService.fetchAll, {
        size: 100,
      }),
      callApi(api.exercisesDirectionsService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(
      studiosPageActions.fetchAllFiltersSuccess({
        cities: studiosCitiesResponse.data.content,
        countries: studiosCountriesResponse.data.content,
        organizations: organizationsResponse.data.content,
        directions: directionsResponse.data.content,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(studiosPageActions.fetchAllFiltersError(new Error()))
  }
}

export function* removeStudio(action: ReturnType<typeof studiosPageActions.removeStudio>) {
  try {
    yield callApi(api.studiosService.remove, action.payload)

    yield put(studiosPageActions.removeStudioSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genDirectionsPageParams(search)

    yield put(studiosPageActions.fetchAllStudios(params))
  } catch (e) {
    console.error(e)
    yield put(studiosPageActions.removeStudioError(new Error()))
  }
}

export function* studiosPageSagas() {
  yield takeLatest(studiosPageActions.fetchAllStudios, fetchAllStudios)
  yield takeLatest(studiosPageActions.removeStudio, removeStudio)
  yield takeLatest(studiosPageActions.fetchAllFilters, fetchAllFilters)
}
