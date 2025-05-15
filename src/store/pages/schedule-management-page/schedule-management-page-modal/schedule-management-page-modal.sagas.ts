import { all, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { scheduleManagementPageModalActions } from './schedule-management-page-modal.slice'
import { callApi } from '../../../../utils/sagas.utils'

function* fetchDictionaries(action: ReturnType<typeof scheduleManagementPageModalActions.fetchDictionaries>) {
  try {
    const [directionsResponse, exercisesTypesResponse, studiosRoomsResponse, trainersResponse]: [
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>>,
      Awaited<ReturnType<typeof api.studiosRoomsService.fetchAll>>,
      Awaited<ReturnType<typeof api.trainersService.fetchAll>>
    ] = yield all([
      callApi(api.exercisesDirectionsService.fetchAll, { size: 200 }),
      callApi(api.exercisesTypesService.fetchAll, { size: 200 }),
      callApi(api.studiosRoomsService.fetchAll, action.payload, { size: 200 }),
      callApi(api.trainersService.fetchAll, { size: 200 }),
    ])

    yield put(
      scheduleManagementPageModalActions.fetchDictionariesSuccess({
        directions: directionsResponse.data,
        exercisesTypes: exercisesTypesResponse.data,
        studiosRooms: studiosRoomsResponse.data,
        trainers: trainersResponse.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(scheduleManagementPageModalActions.fetchDictionariesError(new Error()))
  }
}

export function* scheduleManagementPageModalSagas() {
  yield takeLatest(scheduleManagementPageModalActions.fetchDictionaries, fetchDictionaries)
}
