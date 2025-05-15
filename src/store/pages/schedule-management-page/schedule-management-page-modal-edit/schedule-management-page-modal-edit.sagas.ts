import { put, select, takeLatest } from 'redux-saga/effects'
import * as H from 'history'
import { createMatchSelector, getSearch } from 'connected-react-router'
import { match } from 'react-router-dom'

import { api } from '../../../../api/api'
import { AppState } from '../../../app.store'
import { isDef } from '../../../../types/lang.types'
import { AppPath } from '../../../../types/path.types'
import { genExercisesTimetableDTO } from '../../../../mapping/exercises-timetable.mapping'
import { genScheduleManagementPageParams } from '../../../../pages/schedule-management-page/schedule-management-page.utils'
import { ScheduleManagementPageUrlParams } from '../../../../pages/schedule-management-page/schedule-management-page.types'
import { modalActions } from '../../../common/modal/modal.slice'
import { scheduleManagementPageListActions } from '../schedule-management-page-list/schedule-management-page-list.slice'
import { scheduleManagementPageModalEditActions } from './schedule-management-page-modal-edit.slice'
import { callApi } from '../../../../utils/sagas.utils'

function* fetchSchedule(action: ReturnType<typeof scheduleManagementPageModalEditActions.fetchSchedule>) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesTimetableService.fetchById>> = yield callApi(
      api.exercisesTimetableService.fetchById,
      action.payload
    )
    yield put(scheduleManagementPageModalEditActions.fetchScheduleSuccess(response.data))
  } catch (e) {
    console.error(e)
    yield put(scheduleManagementPageModalEditActions.fetchScheduleError(new Error()))
  }
}

function* updateSchedule(action: ReturnType<typeof scheduleManagementPageModalEditActions.updateSchedule>) {
  try {
    const { id, scheduleFormValues } = action.payload
    const exercisesTimetableDTO = genExercisesTimetableDTO(scheduleFormValues)

    if (isDef(exercisesTimetableDTO)) {
      yield callApi(api.exercisesTimetableService.update, id, exercisesTimetableDTO)
      yield put(scheduleManagementPageModalEditActions.updateScheduleSuccess())

      const search: H.Search = yield select(getSearch)
      const { params }: match<ScheduleManagementPageUrlParams> = yield select(
        createMatchSelector<AppState, ScheduleManagementPageUrlParams>(AppPath.SCHEDULE_MANAGEMENT)
      )
      const pageParams = genScheduleManagementPageParams(params, search)
      yield put(scheduleManagementPageListActions.fetchPageData(pageParams))

      yield put(modalActions.closeLast())
    } else {
      yield put(scheduleManagementPageModalEditActions.updateScheduleError(new Error()))
    }
  } catch (e) {
    console.error(e)
    yield put(scheduleManagementPageModalEditActions.updateScheduleError(new Error()))
  }
}

export function* scheduleManagementPageModalEditSagas() {
  yield takeLatest(scheduleManagementPageModalEditActions.fetchSchedule.type, fetchSchedule)
  yield takeLatest(scheduleManagementPageModalEditActions.updateSchedule.type, updateSchedule)
}
