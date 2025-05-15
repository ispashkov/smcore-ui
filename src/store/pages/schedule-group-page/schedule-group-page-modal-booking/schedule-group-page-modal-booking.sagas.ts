import { all, call, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { genExerciseBookingCreateDTO } from '../../../../mapping/exercises.mapping'
import { isDef } from '../../../../types/lang.types'
import { modalActions } from '../../../common/modal/modal.slice'
import { scheduleGroupPageModalBookingActions } from './schedule-group-page-modal-booking.slice'
import { reFetchBooking, reFetchClientsInWaitingList } from '../schedule-group-page-list/schedule-group-page-list.sagas'
import { callApi } from '../../../../utils/sagas.utils'

export function* fetchExercisesSpots(
  action: ReturnType<typeof scheduleGroupPageModalBookingActions.fetchExercisesSpots>
) {
  try {
    const response: Awaited<ReturnType<typeof api.exercisesService.fetchSpots>> = yield callApi(
      api.exercisesService.fetchSpots,
      action.payload
    )

    yield put(scheduleGroupPageModalBookingActions.fetchExercisesSpotsSuccess(response.data))
  } catch (e) {
    yield put(scheduleGroupPageModalBookingActions.fetchExercisesSpotsError(new Error()))
  }
}

export function* createBooking(action: ReturnType<typeof scheduleGroupPageModalBookingActions.createBooking>) {
  try {
    const { exerciseId, exercisesGroupBookingFormValues } = action.payload

    const exerciseBookingCreateDTO = genExerciseBookingCreateDTO(exercisesGroupBookingFormValues)

    if (isDef(exerciseBookingCreateDTO)) {
      yield callApi(api.exercisesService.createBooking, exerciseId, exerciseBookingCreateDTO)
      yield put(scheduleGroupPageModalBookingActions.createBookingSuccess())

      yield all([call(reFetchBooking), call(reFetchClientsInWaitingList)])

      yield put(modalActions.closeLast())
    } else {
      yield put(scheduleGroupPageModalBookingActions.createBookingError(new Error()))
    }
  } catch (e) {
    yield put(scheduleGroupPageModalBookingActions.createBookingError(new Error()))
  }
}

export function* scheduleGroupPageModalBookingSagas() {
  yield takeLatest(scheduleGroupPageModalBookingActions.fetchExercisesSpots, fetchExercisesSpots)
  yield takeLatest(scheduleGroupPageModalBookingActions.createBooking, createBooking)
}
