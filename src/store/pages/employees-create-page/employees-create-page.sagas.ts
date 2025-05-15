import { all, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genEmployeesPagePath } from '../../../format/path.format'
import { genEmployeeCreateDTO } from '../../../mapping/employees.mapping'
import { employeesCreatePageActions } from './employees-create-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(_: ReturnType<typeof employeesCreatePageActions.fetchPageData>) {
  try {
    const [franchises, positions]: [
      Awaited<ReturnType<typeof api.organizationsService.fetchAll>>,
      Awaited<ReturnType<typeof api.employeesPositionsService.fetchAll>>
    ] = yield all([
      callApi(api.organizationsService.fetchAll, {
        size: 100,
      }),
      callApi(api.employeesPositionsService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(
      employeesCreatePageActions.fetchPageDataSuccess({ franchises: franchises.data, positions: positions.data })
    )
  } catch (e) {
    console.error(e)
    yield put(employeesCreatePageActions.fetchPageDataError(new Error()))
  }
}

export function* createEmployee(action: ReturnType<typeof employeesCreatePageActions.createEmployee>) {
  try {
    const employeeCreateDTO = genEmployeeCreateDTO(action.payload)

    yield callApi(api.employeesService.create, employeeCreateDTO)

    yield put(employeesCreatePageActions.createEmployeeSuccess())
    yield put(push(genEmployeesPagePath()))
  } catch (e) {
    console.error(e)
    yield put(employeesCreatePageActions.createEmployeeError(new Error()))
  }
}

export function* employeesCreatePageSagas() {
  yield takeLatest(employeesCreatePageActions.fetchPageData, fetchPageData)
  yield takeLatest(employeesCreatePageActions.createEmployee, createEmployee)
}
