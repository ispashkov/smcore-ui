import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { genScheduleFormValues } from '../../../../mapping/exercises-timetable.mapping'

const genScheduleManagementPageModalEditExerciseInternal = (state: AppState) =>
  state.scheduleManagementPage.scheduleManagementPageModalEdit.exercisesTimetable

export const genScheduleManagementPageModalEditIsLoading = (state: AppState) =>
  state.scheduleManagementPage.scheduleManagementPageModalEdit.isLoading

export const genScheduleManagementPageModalEditExercise = createSelector(
  genScheduleManagementPageModalEditExerciseInternal,
  genScheduleFormValues
)
