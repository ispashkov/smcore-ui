import { combineReducers } from '@reduxjs/toolkit'

import { schedulePageListReducer } from './schedule-page-list/schedule-page-list.slice'
import { schedulePageModalCreateReducer } from './schedule-page-modal-create/schedule-page-modal-create.slice'

export const schedulePageReducer = combineReducers({
  schedulePageList: schedulePageListReducer,
  schedulePageModalCreate: schedulePageModalCreateReducer,
})
