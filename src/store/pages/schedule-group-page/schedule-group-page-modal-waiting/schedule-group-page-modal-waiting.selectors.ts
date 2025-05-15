import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapExerciseWaitingListToExercisesGroupWaitingClientItems } from '../../../../mapping/clients.mapping'

const getWaitingList = (state: AppState) => state.scheduleGroupPage.scheduleGroupPageModalWaiting.waitingList

export const getScheduleGroupPageModalWaitingIsLoading = (state: AppState) =>
  state.scheduleGroupPage.scheduleGroupPageModalWaiting.isLoading

export const getScheduleGroupPageModalWaitingIsLoaded = (state: AppState) =>
  state.scheduleGroupPage.scheduleGroupPageModalWaiting.isLoaded

export const getScheduleGroupPageModalWaitingList = createSelector(getWaitingList, waitingList =>
  mapExerciseWaitingListToExercisesGroupWaitingClientItems(waitingList?.content)
)
