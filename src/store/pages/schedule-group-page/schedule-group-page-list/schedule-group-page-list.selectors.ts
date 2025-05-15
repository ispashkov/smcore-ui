import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { NNumber, Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { getCurrentStudioOffset } from '../../../common/layout/layout.selectors'
import {
  genExerciseFormValues,
  mapExercisesBookingsToExercisesGroupBookingsTableDataItems,
  mapExerciseToScheduleGroupPageExercise,
} from '../../../../mapping/exercises.mapping'

const genExerciseInternal = (state: AppState): Nullable<ExercisesApi.Exercise> =>
  state.scheduleGroupPage.scheduleGroupPageList.exercise

const genExerciseBookingsInternal = (state: AppState): Nullable<Pagination<ExercisesApi.ExerciseBooking>> =>
  state.scheduleGroupPage.scheduleGroupPageList.exerciseBookings

export const genScheduleGroupPageListIsLoading = (state: AppState): boolean =>
  state.scheduleGroupPage.scheduleGroupPageList.isLoading

export const genScheduleGroupPageListIsLoaded = (state: AppState): boolean =>
  state.scheduleGroupPage.scheduleGroupPageList.isLoaded

export const genScheduleGroupPageListClientsInWaitList = (state: AppState): NNumber =>
  state.scheduleGroupPage.scheduleGroupPageList.clientsInWaitingList

export const genScheduleGroupPageExercise = createSelector(genExerciseInternal, mapExerciseToScheduleGroupPageExercise)

export const genScheduleGroupPageExerciseFormValues = createSelector(
  genExerciseInternal,
  getCurrentStudioOffset,
  (exercise, studioOffset) => genExerciseFormValues(exercise, studioOffset)
)

export const genScheduleGroupPageBookings = createSelector(genExerciseBookingsInternal, exerciseBookings =>
  mapExercisesBookingsToExercisesGroupBookingsTableDataItems(exerciseBookings?.content)
)

export const genScheduleGroupPageBookingsTotalElements = createSelector(
  genExerciseBookingsInternal,
  exerciseBookings => exerciseBookings?.totalElements
)
