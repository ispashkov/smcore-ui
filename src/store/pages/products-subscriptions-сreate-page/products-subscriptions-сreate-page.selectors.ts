import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'
import { mapStudiosToOptions } from '../../../mapping/studios.mapping'
import { mapExercisesTypesToOptions } from '../../../mapping/exercises-types.mapping'

const getDirectionsInternal = (state: AppState) => state.productsSubscriptionsCreatePage.directions
const getStudiosInternal = (state: AppState) => state.productsSubscriptionsCreatePage.studios
const getExercisesInternal = (state: AppState) => state.productsSubscriptionsCreatePage.exercises

export const getDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)
export const getStudiosOptions = createSelector(getStudiosInternal, studios => mapStudiosToOptions(studios?.content))
export const getExercisesOptions = createSelector(getExercisesInternal, exercise =>
  mapExercisesTypesToOptions(exercise?.content)
)
