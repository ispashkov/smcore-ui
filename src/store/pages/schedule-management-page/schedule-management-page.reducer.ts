import { combineReducers } from '@reduxjs/toolkit'

import { scheduleManagementPageModalReducer } from './schedule-management-page-modal/schedule-management-page-modal.slice'
import { scheduleManagementPageModalCreateReducer } from './schedule-management-page-modal-create/schedule-management-page-modal-create.slice'
import { scheduleManagementPageModalEditReducer } from './schedule-management-page-modal-edit/schedule-management-page-modal-edit.slice'
import { scheduleManagementPageListReducer } from './schedule-management-page-list/schedule-management-page-list.slice'

export const scheduleManagementPageReducer = combineReducers({
  scheduleManagementPageModal: scheduleManagementPageModalReducer,
  scheduleManagementPageModalCreate: scheduleManagementPageModalCreateReducer,
  scheduleManagementPageModalEdit: scheduleManagementPageModalEditReducer,
  scheduleManagementPageList: scheduleManagementPageListReducer,
})
