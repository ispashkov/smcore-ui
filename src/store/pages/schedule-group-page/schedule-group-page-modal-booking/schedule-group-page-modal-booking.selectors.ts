import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { Nullable } from '../../../../types/lang.types'
import { ExercisesApi } from '../../../../api/types/exercises-api.types'
import { mapExercisesSpotsToOptions } from '../../../../mapping/exercises.mapping'

const genExerciseSpotsInternal = (state: AppState): Nullable<ExercisesApi.ExerciseSpot[]> =>
  state.scheduleGroupPage.scheduleGroupPageModalBooking.exercisesSpots

export const genScheduleGroupPageModalBookingIsLoading = (state: AppState): boolean =>
  state.scheduleGroupPage.scheduleGroupPageModalBooking.isLoading

export const genScheduleGroupPageModalBookingExercisesSpots = createSelector(
  genExerciseSpotsInternal,
  mapExercisesSpotsToOptions
)
