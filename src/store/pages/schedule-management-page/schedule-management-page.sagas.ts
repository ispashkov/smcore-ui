import { all, spawn } from 'redux-saga/effects'

import { scheduleManagementPageModalSagas } from './schedule-management-page-modal/schedule-management-page-modal.sagas'
import { scheduleManagementPageModalCreateSagas } from './schedule-management-page-modal-create/schedule-management-page-modal-create.sagas'
import { scheduleManagementPageModalEditSagas } from './schedule-management-page-modal-edit/schedule-management-page-modal-edit.sagas'
import { scheduleManagementPageListSagas } from './schedule-management-page-list/schedule-management-page-list.sagas'

export function* scheduleManagementPageSagas() {
  yield all(
    [
      scheduleManagementPageModalSagas,
      scheduleManagementPageModalCreateSagas,
      scheduleManagementPageModalEditSagas,
      scheduleManagementPageListSagas,
    ].map(saga => spawn(saga))
  )
}
