import { all, spawn } from 'redux-saga/effects'

import { scheduleGroupPageListSagas } from './schedule-group-page-list/schedule-group-page-list.sagas'
import { scheduleGroupPageModalBookingSagas } from './schedule-group-page-modal-booking/schedule-group-page-modal-booking.sagas'
import { scheduleGroupPageModalEditSagas } from './schedule-group-page-modal-edit/schedule-group-page-modal-edit.sagas'
import { scheduleGroupPageModalWaiting } from './schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.sagas'

export function* scheduleGroupPageSagas() {
  yield all(
    [
      scheduleGroupPageListSagas,
      scheduleGroupPageModalBookingSagas,
      scheduleGroupPageModalEditSagas,
      scheduleGroupPageModalWaiting,
    ].map(saga => spawn(saga))
  )
}
