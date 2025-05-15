import { all, put, select, takeLatest } from 'redux-saga/effects'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'
import * as H from 'history'

import { api } from '../../../../api/api'
import { genExercisesCreateDTO } from '../../../../mapping/exercises.mapping'
import { modalActions } from '../../../common/modal/modal.slice'
import { genSchedulePageParams } from '../../../../pages/schedule-page/schedule-page.utils'
import { SchedulePageUrlParams } from '../../../../pages/schedule-page/schedule-page.types'
import { AppPath } from '../../../../types/path.types'
import { isDef } from '../../../../types/lang.types'
import { AppState } from '../../../app.store'
import { schedulePageListActions } from '../schedule-page-list/schedule-page-list.slice'
import { schedulePageModalCreateActions } from './schedule-page-modal-create.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* createExercise(action: ReturnType<typeof schedulePageModalCreateActions.createExercise>) {
  try {
    const { exercisesFormValuesDTO, studioRoomId } = action.payload
    const exercisesCreateDTO = genExercisesCreateDTO(studioRoomId, exercisesFormValuesDTO)

    if (isDef(exercisesCreateDTO)) {
      yield callApi(api.exercisesService.create, exercisesCreateDTO)
      yield put(schedulePageModalCreateActions.createExerciseSuccess())

      const search: H.Search = yield select(getSearch)
      const { params }: match<SchedulePageUrlParams> = yield select(
        createMatchSelector<AppState, SchedulePageUrlParams>(AppPath.SCHEDULE)
      )

      const pageParams = genSchedulePageParams(params, search)

      yield put(schedulePageListActions.fetchPageData(pageParams))
      yield put(modalActions.closeLast())
    } else {
      yield put(schedulePageModalCreateActions.createExerciseError(new Error()))
    }
  } catch (e) {
    console.error(e)
    yield put(schedulePageModalCreateActions.createExerciseError(new Error()))
  }
}

export function* fetchDictionaries(action: ReturnType<typeof schedulePageModalCreateActions.fetchDictionaries>) {
  try {
    const [directionsResponse, exercisesTypesResponse, trainersResponse]: [
      Awaited<ReturnType<typeof api.exercisesDirectionsService.fetchAll>>,
      Awaited<ReturnType<typeof api.exercisesTypesService.fetchAll>>,
      Awaited<ReturnType<typeof api.trainersService.fetchAll>>
    ] = yield all([
      callApi(api.exercisesDirectionsService.fetchAll, { size: 200 }),
      callApi(api.exercisesTypesService.fetchAll, { size: 200 }),
      callApi(api.trainersService.fetchAll, { size: 200 }),
    ])

    yield put(
      schedulePageModalCreateActions.fetchDictionariesSuccess({
        directions: directionsResponse.data,
        exercisesTypes: exercisesTypesResponse.data,
        trainers: trainersResponse.data,
      })
    )
  } catch (e) {
    console.error(e)
    yield put(schedulePageModalCreateActions.fetchDictionariesError(new Error()))
  }
}

export function* schedulePageModalCreateSagas() {
  yield takeLatest(schedulePageModalCreateActions.createExercise, createExercise)
  yield takeLatest(schedulePageModalCreateActions.fetchDictionaries, fetchDictionaries)
}
