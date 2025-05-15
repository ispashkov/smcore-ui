import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapProductsSubscriptions } from '../../../../mapping/products-subscriptions.mapping'

const getSubscriptionInternal = (state: AppState) => state.productsPageReducer.productsPageIndividual.subscriptions

export const getProductsPageIndividualIsLoading = (state: AppState) =>
  state.productsPageReducer.productsPageIndividual.isLoading
export const getProductsPageIndividualIsLoaded = (state: AppState) =>
  state.productsPageReducer.productsPageIndividual.isLoaded

export const getProductsPageIndividualSubscriptions = createSelector(getSubscriptionInternal, subscriptions =>
  mapProductsSubscriptions(subscriptions?.content)
)

export const getProductsPageIndividualTotalElements = createSelector(
  getSubscriptionInternal,
  subscriptions => subscriptions?.totalElements
)
