import { createSelector } from '@reduxjs/toolkit'

import { mapStudiosRoomsToTags } from '../../../../mapping/studios-rooms.mapping'
import { mapExercisesTimetableToScheduleTableDataItems } from '../../../../mapping/exercises-timetable.mapping'
import { StudiosRoomsApi } from '../../../../api/types/studios-rooms-api.types'
import { ExercisesTimetableApi } from '../../../../api/types/exercises-timetable-api.types'
import { Nullable } from '../../../../types/lang.types'
import { AppState } from '../../../app.store'

const genExercisesTimetableInternal = (state: AppState): Nullable<ExercisesTimetableApi.ExercisesTimetable[]> =>
  state.scheduleManagementPage.scheduleManagementPageList.exercisesTimetable

const genStudiosRoomsInternal = (state: AppState): Nullable<StudiosRoomsApi.StudioRoom[]> =>
  state.scheduleManagementPage.scheduleManagementPageList.studiosRooms

export const genScheduleManagementPageListIsLoading = (state: AppState): boolean =>
  state.scheduleManagementPage.scheduleManagementPageList.isLoading

export const genScheduleManagementPageListIsLoaded = (state: AppState): boolean =>
  state.scheduleManagementPage.scheduleManagementPageList.isLoaded

export const genScheduleManagementPageListIsCanceling = (state: AppState): boolean =>
  state.scheduleManagementPage.scheduleManagementPageList.isCanceling

export const genScheduleManagementPageListTableDataItems = createSelector(
  genExercisesTimetableInternal,
  mapExercisesTimetableToScheduleTableDataItems
)

export const genScheduleManagementPageListStudiosRoomsTags = createSelector(
  genStudiosRoomsInternal,
  mapStudiosRoomsToTags
)
