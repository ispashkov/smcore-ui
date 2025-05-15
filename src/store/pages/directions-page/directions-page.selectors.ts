import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { mapDirectionsToDirectionsTableRowList } from '../../../mapping/directions.mapping'

const getDirectionsInternal = (state: AppState): Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>> =>
  state.directionsPage.directions

export const genDirectionsIsLoading = (state: AppState): boolean => state.directionsPage.isLoading

export const genDirectionsTableRowList = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToDirectionsTableRowList(directions?.content)
)

export const genDirectionsTotalElements = createSelector(getDirectionsInternal, directions => directions?.totalElements)
