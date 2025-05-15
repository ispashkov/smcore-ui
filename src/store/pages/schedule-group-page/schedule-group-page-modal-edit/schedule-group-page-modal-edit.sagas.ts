import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { isDef } from '../../../../types/lang.types'
import { genExercisesUpdateDTO } from '../../../../mapping/exercises.mapping'
import { modalActions } from '../../../common/modal/modal.slice'
import { reFetchExercise } from '../schedule-group-page-list/schedule-group-page-list.sagas'
import { scheduleGroupPageModalEditActions } from './schedule-group-page-modal-edit.slice'
import { genScheduleGroupPageExercise } from '../schedule-group-page-list/schedule-group-page-list.selectors'
import {
  genDateOfEndFromScheduleGroupPageExercise,
  genDateOfStartFromScheduleGroupPageExercise,
} from '../../../../pages/schedule-group-page/schedule-group-page-modal-edit/schedule-group-page-modal-edit.utils'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchDictionaries(_action: ReturnType<typeof scheduleGroupPageModalEditActions.fetchDictionaries>) {
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
      scheduleGroupPageModalEditActions.fetchDictionariesSuccess({
        directions: directionsResponse.data,
        exercisesTypes: exercisesTypesResponse.data,
        trainers: trainersResponse.data,
      })
    )
  } catch (e) {
    yield put(scheduleGroupPageModalEditActions.fetchDictionariesError(new Error()))
  }
}

export function* editExercise(action: ReturnType<typeof scheduleGroupPageModalEditActions.editExercise>) {
  try {
    const { exerciseId, studioRoomId, exercisesFormValuesDTO } = action.payload

    const scheduleGroupPageExercise: ReturnType<typeof genScheduleGroupPageExercise> = yield select(
      genScheduleGroupPageExercise
    )

    if (isDef(scheduleGroupPageExercise)) {
      const dateOfStart = genDateOfStartFromScheduleGroupPageExercise(scheduleGroupPageExercise)
      const dateOfEnd = genDateOfEndFromScheduleGroupPageExercise(scheduleGroupPageExercise)

      const exercisesUpdateDTO = genExercisesUpdateDTO(exercisesFormValuesDTO, studioRoomId, dateOfStart, dateOfEnd)

      if (isDef(exercisesUpdateDTO)) {
        yield callApi(api.exercisesService.update, exerciseId, exercisesUpdateDTO)
        yield put(scheduleGroupPageModalEditActions.editExerciseSuccess())
        yield put(modalActions.closeLast())

        yield call(reFetchExercise)
      } else {
        yield put(scheduleGroupPageModalEditActions.editExerciseError(new Error()))
      }
    } else {
      yield put(scheduleGroupPageModalEditActions.editExerciseError(new Error()))
    }
  } catch (e) {
    yield put(scheduleGroupPageModalEditActions.editExerciseError(new Error()))
  }
}

export function* scheduleGroupPageModalEditSagas() {
  yield takeLatest(scheduleGroupPageModalEditActions.fetchDictionaries.type, fetchDictionaries)
  yield takeLatest(scheduleGroupPageModalEditActions.editExercise.type, editExercise)
}
