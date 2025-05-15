import { put, select, takeLatest } from 'redux-saga/effects'
import { RouterState } from 'connected-react-router'

import { api } from '../../../api/api'
import { genDirectionsPageParams } from '../../../pages/directions-page/directions-page.utils'
import { genPaginationParamsDTO } from '../../../utils/pagination.utils'
import { getRouterState } from '../../common/router/router.selectors'
import { employeesPageActions } from './employees-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllEmployees(action: ReturnType<typeof employeesPageActions.fetchAllEmployees>) {
  try {
    const { page, size } = action.payload

    const params = genPaginationParamsDTO(page, size)

    const response: Awaited<ReturnType<typeof api.employeesService.fetchAll>> = yield callApi(
      api.employeesService.fetchAll,
      params
    )

    yield put(employeesPageActions.fetchAllEmployeesSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(employeesPageActions.fetchAllEmployeesError(new Error()))
  }
}

export function* removeEmployee(action: ReturnType<typeof employeesPageActions.removeEmployee>) {
  try {
    yield callApi(api.employeesService.remove, action.payload)

    yield put(employeesPageActions.removeEmployeeSuccess())

    const { location }: RouterState = yield select(getRouterState)

    const { search } = location
    const params = genDirectionsPageParams(search)

    yield put(employeesPageActions.fetchAllEmployees(params))
  } catch (e) {
    console.error(e)
    yield put(employeesPageActions.removeEmployeeError(new Error()))
  }
}

export function* employeesPageSagas() {
  yield takeLatest(employeesPageActions.fetchAllEmployees, fetchAllEmployees)
  yield takeLatest(employeesPageActions.removeEmployee, removeEmployee)
}
