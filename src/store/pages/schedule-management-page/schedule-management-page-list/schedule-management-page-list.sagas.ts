import { all, put, select, takeLatest } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { api } from '../../../../api/api'
import { isExercisesTimetableCancelConflict } from '../../../../api/utils/exercises-timetable-api.utils'
import { ScheduleManagementPageUrlParams } from '../../../../pages/schedule-management-page/schedule-management-page.types'
import { genScheduleManagementPageParams } from '../../../../pages/schedule-management-page/schedule-management-page.utils'
import { AppPath } from '../../../../types/path.types'
import { AppModal } from '../../../../types/modal.types'
import { AppState } from '../../../app.store'
import { modalActions } from '../../../common/modal/modal.slice'
import { scheduleManagementPageListActions } from './schedule-management-page-list.slice'
import { callApi } from '../../../../utils/sagas.utils'

function* fetchPageData(action: ReturnType<typeof scheduleManagementPageListActions.fetchPageData>) {
  try {
    const { studioId, roomId } = action.payload

    const [exercisesTimetableResponse, studiosRoomsResponse]: [
      Awaited<ReturnType<typeof api.exercisesTimetableService.fetchAll>>,
      Awaited<ReturnType<typeof api.studiosRoomsService.fetchAll>>
    ] = yield all([
      callApi(api.exercisesTimetableService.fetchAll, {
        studioId,
        roomId,
      }),
      callApi(api.studiosRoomsService.fetchAll, studioId),
    ])

    yield put(
      scheduleManagementPageListActions.fetchPageDataSuccess({
        exercisesTimetable: exercisesTimetableResponse.data,
        studiosRooms: studiosRoomsResponse.data.content,
      })
    )
  } catch (e) {
    yield put(scheduleManagementPageListActions.fetchPageDataError())
  }
}

function* cancelSchedule(action: ReturnType<typeof scheduleManagementPageListActions.cancelSchedule>) {
  try {
    yield callApi(api.exercisesTimetableService.cancel, action.payload)
    yield put(scheduleManagementPageListActions.cancelScheduleSuccess())

    const search: H.Search = yield select(getSearch)
    const { params }: match<ScheduleManagementPageUrlParams> = yield select(
      createMatchSelector<AppState, ScheduleManagementPageUrlParams>(AppPath.SCHEDULE_MANAGEMENT)
    )
    const pageParams = genScheduleManagementPageParams(params, search)
    yield put(scheduleManagementPageListActions.fetchPageData(pageParams))
    yield put(modalActions.closeLast())
  } catch (e) {
    yield put(scheduleManagementPageListActions.cancelScheduleError())

    if (isExercisesTimetableCancelConflict(e)) {
      yield put(
        modalActions.replaceAll({
          modal: AppModal.SCHEDULE_MANAGEMENT_PAGE_MODAL_ERROR,
        })
      )
    }
  }
}

export function* scheduleManagementPageListSagas() {
  yield takeLatest(scheduleManagementPageListActions.fetchPageData.type, fetchPageData)
  yield takeLatest(scheduleManagementPageListActions.cancelSchedule.type, cancelSchedule)
}
