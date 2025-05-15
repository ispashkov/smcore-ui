import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { Nullable } from '../../../../types/lang.types'
import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { mapExercisesToExercisesTableDataItems } from '../../../../mapping/exercises.mapping'
import { mapStudiosRoomsToTags } from '../../../../mapping/studios-rooms.mapping'

const genExercisesInternal = (state: AppState): Nullable<ExercisesApi.Exercise[]> =>
  state.schedulePage.schedulePageList.exercises

const genStudiosRoomsInternal = (state: AppState): Nullable<StudiosRoomsApi.StudioRoom[]> =>
  state.schedulePage.schedulePageList.studiosRooms

export const genSchedulePageListIsLoading = (state: AppState): boolean => state.schedulePage.schedulePageList.isLoading
export const genSchedulePageListIsLoaded = (state: AppState): boolean => state.schedulePage.schedulePageList.isLoaded

export const genSchedulePageListIsCanceling = (state: AppState): boolean =>
  state.schedulePage.schedulePageList.isCanceling

export const genSchedulePageListTableRowList = createSelector(
  genExercisesInternal,
  mapExercisesToExercisesTableDataItems
)
export const genSchedulePageListStudiosRoomsTags = createSelector(genStudiosRoomsInternal, mapStudiosRoomsToTags)
