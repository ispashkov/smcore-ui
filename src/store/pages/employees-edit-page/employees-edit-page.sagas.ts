import { all, put, select, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { EmployeesApi } from '../../../api/types/employees-api.types'
import { genEmployeesPagePath } from '../../../format/path.format'
import { genEmployeeUpdateDTO } from '../../../mapping/employees.mapping'
import { isDef, Nullable } from '../../../types/lang.types'
import { employeesEditPageActions } from './employees-edit-page.slice'
import { genEmployee } from './employees-edit-page.selectors'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof employeesEditPageActions.fetchPageData>) {
  try {
    const [employee, franchises, positions]: [
      Awaited<ReturnType<typeof api.employeesService.fetchById>>,
      Awaited<ReturnType<typeof api.organizationsService.fetchAll>>,
      Awaited<ReturnType<typeof api.employeesPositionsService.fetchAll>>
    ] = yield all([
      callApi(api.employeesService.fetchById, action.payload),
      callApi(api.organizationsService.fetchAll, {
        size: 100,
      }),
      callApi(api.employeesPositionsService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(
      employeesEditPageActions.fetchPageDataSuccess({
        employee: employee.data,
        franchises: franchises.data,
        positions: positions.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(employeesEditPageActions.fetchPageDataError(new Error()))
  }
}

export function* updateEmployee(action: ReturnType<typeof employeesEditPageActions.updateEmployee>) {
  try {
    const { id, data } = action.payload

    const employee: Nullable<EmployeesApi.Employee> = yield select(genEmployee)
    const employeeUpdateDTO = genEmployeeUpdateDTO(data, employee)

    if (isDef(employeeUpdateDTO)) {
      yield callApi(api.employeesService.update, id, employeeUpdateDTO)
      yield put(employeesEditPageActions.updateEmployeeSuccess())
      yield put(push(genEmployeesPagePath()))
    } else {
      yield put(employeesEditPageActions.updateEmployeeError(new Error()))
    }
  } catch (e) {
    console.error(e)
    yield put(employeesEditPageActions.updateEmployeeError(new Error()))
  }
}

export function* employeesEditPageSagas() {
  yield takeLatest(employeesEditPageActions.fetchPageData, fetchPageData)
  yield takeLatest(employeesEditPageActions.updateEmployee, updateEmployee)
}
