import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'
import { mapStudiosToOptions } from '../../../mapping/studios.mapping'
import { genProductSubscriptionFormValues } from '../../../mapping/products-subscriptions.mapping'
import { mapExercisesTypesToOptions } from '../../../mapping/exercises-types.mapping'

const getDirectionsInternal = (state: AppState) => state.productsSubscriptionsEditPage.directions
const getStudiosInternal = (state: AppState) => state.productsSubscriptionsEditPage.studios
const getExercisesInternal = (state: AppState) => state.productsSubscriptionsEditPage.exercises
const getSubscriptionInternal = (state: AppState) => state.productsSubscriptionsEditPage.subscription

export const getDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)
export const getStudiosOptions = createSelector(getStudiosInternal, studios => mapStudiosToOptions(studios?.content))
export const getExercisesOptions = createSelector(getExercisesInternal, exercise =>
  mapExercisesTypesToOptions(exercise?.content)
)

export const getProductsServicesFormValues = createSelector(getSubscriptionInternal, genProductSubscriptionFormValues)
