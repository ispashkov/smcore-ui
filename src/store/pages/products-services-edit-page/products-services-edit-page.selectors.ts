import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'
import { mapStudiosToOptions } from '../../../mapping/studios.mapping'
import { genProductServicesFormValues } from '../../../mapping/products-services.mapping'
import { mapExercisesTypesToOptions } from '../../../mapping/exercises-types.mapping'

const getDirectionsInternal = (state: AppState) => state.productsEditPageReducer.directions
const getStudiosInternal = (state: AppState) => state.productsEditPageReducer.studios
const getExercisesInternal = (state: AppState) => state.productsEditPageReducer.exercises
const getServiceInternal = (state: AppState) => state.productsEditPageReducer.service

export const getDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)
export const getStudiosOptions = createSelector(getStudiosInternal, studios => mapStudiosToOptions(studios?.content))
export const getExercisesOptions = createSelector(getExercisesInternal, exercise =>
  mapExercisesTypesToOptions(exercise?.content)
)

export const getProductsServicesFormValues = createSelector(getServiceInternal, genProductServicesFormValues)
