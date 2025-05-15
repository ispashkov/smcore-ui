import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapDirectionsToOptions } from '../../../../mapping/directions.mapping'
import { mapExercisesTypesToOptions } from '../../../../mapping/exercises-types.mapping'
import { mapTrainersToOptions } from '../../../../mapping/trainers.mapping'

const getDirectionsInternal = (state: AppState) => state.scheduleGroupPage.scheduleGroupPageModalEdit.directions
const getExercisesTypesInternal = (state: AppState) => state.scheduleGroupPage.scheduleGroupPageModalEdit.exercisesTypes
const getTrainersInternal = (state: AppState) => state.scheduleGroupPage.scheduleGroupPageModalEdit.trainers

export const getScheduleGroupPageModalEditIsLoading = (state: AppState) =>
  state.scheduleGroupPage.scheduleGroupPageModalEdit.isLoading

export const getScheduleGroupPageModalEditIsLoaded = (state: AppState) =>
  state.scheduleGroupPage.scheduleGroupPageModalEdit.isLoaded

export const getScheduleGroupPageModalEditDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)

export const getScheduleGroupPageModalEditExercisesTypesOptions = createSelector(
  getExercisesTypesInternal,
  exercisesTypes => mapExercisesTypesToOptions(exercisesTypes?.content)
)

export const getScheduleGroupPageModalEditTrainersOptions = createSelector(getTrainersInternal, trainers =>
  mapTrainersToOptions(trainers?.content)
)
