import { all, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { api } from '../../../api/api'
import { genOrganizationDTO } from '../../../mapping/franchises.mapping'
import { genFranchisesPagePath } from '../../../format/path.format'
import { franchisesEditPageActions } from './franchises-edit-page.slice'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof franchisesEditPageActions.fetchPageData>) {
  try {
    const [franchise, customers]: [
      Awaited<ReturnType<typeof api.organizationsService.fetchById>>,
      Awaited<ReturnType<typeof api.employeesService.fetchAll>>
    ] = yield all([
      callApi(api.organizationsService.fetchById, action.payload),
      callApi(api.employeesService.fetchAll, {
        size: 100,
      }),
    ])

    yield put(franchisesEditPageActions.fetchPageDataSuccess({ franchise: franchise.data, customers: customers.data }))
  } catch (e) {
    console.error(e)
    yield put(franchisesEditPageActions.fetchPageDataError(new Error()))
  }
}

export function* updateFranchise(action: ReturnType<typeof franchisesEditPageActions.updateFranchise>) {
  try {
    const { id, data } = action.payload
    const organizationDTO = genOrganizationDTO(data)

    yield callApi(api.organizationsService.update, id, organizationDTO)

    yield put(franchisesEditPageActions.updateFranchiseSuccess())
    yield put(push(genFranchisesPagePath()))
  } catch (e) {
    console.error(e)
    yield put(franchisesEditPageActions.updateFranchiseError(new Error()))
  }
}

export function* franchisesEditPageSagas() {
  yield takeLatest(franchisesEditPageActions.fetchPageData, fetchPageData)
  yield takeLatest(franchisesEditPageActions.updateFranchise, updateFranchise)
}
