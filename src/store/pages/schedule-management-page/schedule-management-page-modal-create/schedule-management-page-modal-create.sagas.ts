import { put, select, takeLatest } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { genExercisesTimetableDTO } from '../../../../mapping/exercises-timetable.mapping'
import { isDef } from '../../../../types/lang.types'
import { api } from '../../../../api/api'
import { ScheduleManagementPageUrlParams } from '../../../../pages/schedule-management-page/schedule-management-page.types'
import { AppState } from '../../../app.store'
import { AppPath } from '../../../../types/path.types'
import { genScheduleManagementPageParams } from '../../../../pages/schedule-management-page/schedule-management-page.utils'
import { modalActions } from '../../../common/modal/modal.slice'
import { scheduleManagementPageListActions } from '../schedule-management-page-list/schedule-management-page-list.slice'
import { scheduleManagementPageModalCreateActions } from './schedule-management-page-modal-create.slice'
import { callApi } from '../../../../utils/sagas.utils'

function* createSchedule(action: ReturnType<typeof scheduleManagementPageModalCreateActions.createSchedule>) {
  try {
    const exercisesTimetableDTO = genExercisesTimetableDTO(action.payload)

    if (isDef(exercisesTimetableDTO)) {
      yield callApi(api.exercisesTimetableService.create, exercisesTimetableDTO)
      yield put(scheduleManagementPageModalCreateActions.createScheduleSuccess())

      const search: H.Search = yield select(getSearch)
      const { params }: match<ScheduleManagementPageUrlParams> = yield select(
        createMatchSelector<AppState, ScheduleManagementPageUrlParams>(AppPath.SCHEDULE_MANAGEMENT)
      )
      const pageParams = genScheduleManagementPageParams(params, search)
      yield put(scheduleManagementPageListActions.fetchPageData(pageParams))

      yield put(modalActions.closeLast())
    } else {
      yield put(scheduleManagementPageModalCreateActions.createScheduleError(new Error()))
    }
  } catch (e) {
    console.error(e)
    yield put(scheduleManagementPageModalCreateActions.createScheduleError(new Error()))
  }
}

export function* scheduleManagementPageModalCreateSagas() {
  yield takeLatest(scheduleManagementPageModalCreateActions.createSchedule.type, createSchedule)
}
