import { all, put, select, takeLatest } from 'redux-saga/effects'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'
import * as H from 'history'

import { api } from '../../../../api/api'
import { isExercisesCancelConflict } from '../../../../api/utils/exercises-api.utils'
import { genSchedulePageParams } from '../../../../pages/schedule-page/schedule-page.utils'
import { SchedulePageUrlParams } from '../../../../pages/schedule-page/schedule-page.types'
import { AppPath } from '../../../../types/path.types'
import { AppState } from '../../../app.store'
import { modalActions } from '../../../common/modal/modal.slice'
import { AppModal } from '../../../../types/modal.types'
import { schedulePageListActions } from './schedule-page-list.slice'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchPageData(action: ReturnType<typeof schedulePageListActions.fetchPageData>) {
  try {
    const { studioId, roomId, date, completed, extended } = action.payload

    const [exercisesResponse, studiosRoomsResponse]: [
      Awaited<ReturnType<typeof api.exercisesService.fetchAll>>,
      Awaited<ReturnType<typeof api.studiosRoomsService.fetchAll>>
    ] = yield all([
      callApi(api.exercisesService.fetchAll, {
        studioId,
        roomId,
        date,
        includeCompleted: completed,
        includeAvailableSlots: extended,
      }),
      callApi(api.studiosRoomsService.fetchAll, studioId),
    ])

    yield put(
      schedulePageListActions.fetchPageDataSuccess({
        exercises: exercisesResponse.data,
        studiosRooms: studiosRoomsResponse.data.content,
      })
    )
  } catch (e) {
    yield put(schedulePageListActions.fetchPageDataError(new Error()))
  }
}

export function* cancelExercise(action: ReturnType<typeof schedulePageListActions.cancelExercise>) {
  try {
    yield callApi(api.exercisesService.cancel, action.payload)
    yield put(schedulePageListActions.cancelExerciseSuccess())
    yield put(modalActions.closeLast())

    const search: H.Search = yield select(getSearch)
    const { params }: match<SchedulePageUrlParams> = yield select(
      createMatchSelector<AppState, SchedulePageUrlParams>(AppPath.SCHEDULE)
    )

    const pageParams = genSchedulePageParams(params, search)

    yield put(schedulePageListActions.fetchPageData(pageParams))
  } catch (e) {
    yield put(schedulePageListActions.cancelExerciseError(new Error()))

    if (isExercisesCancelConflict(e)) {
      yield put(
        modalActions.replaceAll({
          modal: AppModal.SCHEDULE_PAGE_MODAL_ERROR,
        })
      )
    }
  }
}

export function* schedulePageListSagas() {
  yield takeLatest(schedulePageListActions.fetchPageData, fetchPageData)
  yield takeLatest(schedulePageListActions.cancelExercise, cancelExercise)
}
