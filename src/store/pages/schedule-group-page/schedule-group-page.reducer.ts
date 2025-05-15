import { combineReducers } from '@reduxjs/toolkit'

import { scheduleGroupPageListReducer } from './schedule-group-page-list/schedule-group-page-list.slice'
import { scheduleGroupPageModalBookingReducer } from './schedule-group-page-modal-booking/schedule-group-page-modal-booking.slice'
import { scheduleGroupPageModalEditReducer } from './schedule-group-page-modal-edit/schedule-group-page-modal-edit.slice'
import { scheduleGroupPageModalWaitingReducer } from './schedule-group-page-modal-waiting/schedule-group-page-modal-waiting.slice'

export const scheduleGroupPageReducer = combineReducers({
  scheduleGroupPageList: scheduleGroupPageListReducer,
  scheduleGroupPageModalBooking: scheduleGroupPageModalBookingReducer,
  scheduleGroupPageModalEdit: scheduleGroupPageModalEditReducer,
  scheduleGroupPageModalWaiting: scheduleGroupPageModalWaitingReducer,
})
