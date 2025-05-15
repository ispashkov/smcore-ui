import { all, spawn } from 'redux-saga/effects'

import { schedulePageModalCreateSagas } from './schedule-page-modal-create/schedule-page-modal-create.sagas'
import { schedulePageListSagas } from './schedule-page-list/schedule-page-list.sagas'

export function* schedulePageSagas() {
  yield all([schedulePageModalCreateSagas, schedulePageListSagas].map(saga => spawn(saga)))
}
