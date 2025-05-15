import { put, takeLatest, select } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../api/api'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { franchisesPageActions } from './franchises-page.slice'
import { getRouterState } from '../../common/router/router.selectors'
import { genFranchisesPageParams } from '../../../pages/franchises-page/franchises-page.utils'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllFranchises(action: ReturnType<typeof franchisesPageActions.fetchAllFranchises>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.organizationsService.fetchAll>> = yield callApi(
      api.organizationsService.fetchAll,
      params
    )

    yield put(franchisesPageActions.fetchAllFranchisesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(franchisesPageActions.fetchAllFranchisesError(new Error()))
  }
}

export function* removeFranchise(action: ReturnType<typeof franchisesPageActions.removeFranchise>) {
  try {
    yield callApi(api.organizationsService.remove, action.payload)

    yield put(franchisesPageActions.removeFranchiseSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genFranchisesPageParams(search)

    yield put(franchisesPageActions.fetchAllFranchises(params))
  } catch (e) {
    console.error(e)
    yield put(franchisesPageActions.removeFranchiseError(new Error()))
  }
}

export function* franchisesPageSagas() {
  yield takeLatest(franchisesPageActions.fetchAllFranchises, fetchAllFranchises)
  yield takeLatest(franchisesPageActions.removeFranchise, removeFranchise)
}
