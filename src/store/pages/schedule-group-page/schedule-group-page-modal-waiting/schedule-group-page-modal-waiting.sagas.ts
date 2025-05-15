import { put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../../api/api'
import { callApi } from '../../../../utils/sagas.utils'
import { modalActions } from '../../../common/modal/modal.slice'
import { AppModal } from '../../../../types/modal.types'
import { scheduleGroupPageModalWaitingActions } from './schedule-group-page-modal-waiting.slice'

export function* fetchWaitingList(action: ReturnType<typeof scheduleGroupPageModalWaitingActions.fetchWaitingList>) {
  try {
    const { exerciseId, search } = action.payload

    const response: Awaited<ReturnType<typeof api.exercisesService.fetchWaitingList>> = yield callApi(
      api.exercisesService.fetchWaitingList,
      exerciseId,
      {
        search,
      }
    )

    yield put(scheduleGroupPageModalWaitingActions.fetchWaitingListSuccess(response.data))
  } catch {
    yield put(scheduleGroupPageModalWaitingActions.fetchWaitingListError(new Error()))
  }
}

export function* bookClient(action: ReturnType<typeof scheduleGroupPageModalWaitingActions.bookClient>) {
  const { exerciseId, phone } = action.payload

  yield put(modalActions.closeLast())
  yield put(
    modalActions.show({
      modal: AppModal.SCHEDULE_GROUP_PAGE_MODAL_BOOKING,
      props: {
        scheduleId: exerciseId,
        phone,
      },
    })
  )
}

export function* scheduleGroupPageModalWaiting() {
  yield takeLatest(scheduleGroupPageModalWaitingActions.fetchWaitingList.type, fetchWaitingList)
  yield takeLatest(scheduleGroupPageModalWaitingActions.bookClient.type, bookClient)
}
