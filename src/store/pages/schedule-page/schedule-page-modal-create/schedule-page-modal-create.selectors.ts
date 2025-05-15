import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapDirectionsToOptions } from '../../../../mapping/directions.mapping'
import { mapExercisesTypesToOptions } from '../../../../mapping/exercises-types.mapping'
import { mapTrainersToOptions } from '../../../../mapping/trainers.mapping'

const getDirectionsInternal = (state: AppState) => state.schedulePage.schedulePageModalCreate.directions
const getExercisesTypesInternal = (state: AppState) => state.schedulePage.schedulePageModalCreate.exercisesTypes
const getTrainersInternal = (state: AppState) => state.schedulePage.schedulePageModalCreate.trainers

export const getSchedulePageModalCreateIsLoading = (state: AppState) =>
  state.schedulePage.schedulePageModalCreate.isLoading

export const getSchedulePageModalCreateDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)

export const getSchedulePageModalCreateExercisesTypesOptions = createSelector(
  getExercisesTypesInternal,
  exercisesTypes => mapExercisesTypesToOptions(exercisesTypes?.content)
)

export const getSchedulePageModalCreateTrainersOptions = createSelector(getTrainersInternal, trainers =>
  mapTrainersToOptions(trainers?.content)
)
