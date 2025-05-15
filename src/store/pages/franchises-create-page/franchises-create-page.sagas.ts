import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genOrganizationDTO } from '../../../mapping/franchises.mapping'
import { genFranchisesPagePath } from '../../../format/path.format'
import { franchisesCreatePageActions } from './franchises-create-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* createFranchise(action: ReturnType<typeof franchisesCreatePageActions.createFranchise>) {
  try {
    const organizationDTO = genOrganizationDTO(action.payload)

    yield callApi(api.organizationsService.create, organizationDTO)

    yield put(franchisesCreatePageActions.createFranchiseSuccess())
    yield put(push(genFranchisesPagePath()))
  } catch (e) {
    console.error(e)
    yield put(franchisesCreatePageActions.createFranchiseError(new Error()))
  }
}

export function* fetchAllCustomers(_: ReturnType<typeof franchisesCreatePageActions.fetchAllCustomers>) {
  try {
    const response: Awaited<ReturnType<typeof api.employeesService.fetchAll>> = yield callApi(
      api.employeesService.fetchAll,
      {
        size: 100,
      }
    )

    yield put(franchisesCreatePageActions.fetchAllCustomersSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(franchisesCreatePageActions.fetchAllCustomersSuccessError(new Error()))
  }
}

export function* franchisesCreatePageSagas() {
  yield takeLatest(franchisesCreatePageActions.createFranchise, createFranchise)
  yield takeLatest(franchisesCreatePageActions.fetchAllCustomers, fetchAllCustomers)
}
