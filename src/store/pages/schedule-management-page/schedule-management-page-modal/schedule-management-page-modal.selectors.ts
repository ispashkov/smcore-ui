import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapDirectionsToOptions } from '../../../../mapping/directions.mapping'
import { mapExercisesTypesToOptions } from '../../../../mapping/exercises-types.mapping'
import { mapStudiosRoomsToOptions } from '../../../../mapping/studios-rooms.mapping'
import { mapTrainersToOptions } from '../../../../mapping/trainers.mapping'

const getDirectionsInternal = (state: AppState) => state.scheduleManagementPage.scheduleManagementPageModal.directions

const getExercisesTypesInternal = (state: AppState) =>
  state.scheduleManagementPage.scheduleManagementPageModal.exercisesTypes

const getStudiosRoomsInternal = (state: AppState) =>
  state.scheduleManagementPage.scheduleManagementPageModal.studiosRooms

const getTrainersInternal = (state: AppState) => state.scheduleManagementPage.scheduleManagementPageModal.trainers

export const getScheduleManagementPageModalIsLoading = (state: AppState) =>
  state.scheduleManagementPage.scheduleManagementPageModal.isLoading

export const getScheduleManagementPageModalDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)

export const getScheduleManagementPageModalExercisesTypesOptions = createSelector(
  getExercisesTypesInternal,
  exercisesTypes => mapExercisesTypesToOptions(exercisesTypes?.content)
)

export const getScheduleManagementPageModalStudiosRoomsOptions = createSelector(getStudiosRoomsInternal, studiosRooms =>
  mapStudiosRoomsToOptions(studiosRooms?.content)
)

export const getScheduleManagementPageModalTrainersOptions = createSelector(getTrainersInternal, trainers =>
  mapTrainersToOptions(trainers?.content)
)
