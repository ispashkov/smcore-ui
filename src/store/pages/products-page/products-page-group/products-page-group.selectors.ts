import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapProductsSubscriptions } from '../../../../mapping/products-subscriptions.mapping'

const getSubscriptionInternal = (state: AppState) => state.productsPageReducer.productsPageGroup.subscriptions

export const getProductsPageGroupIsLoading = (state: AppState) => state.productsPageReducer.productsPageGroup.isLoading
export const getProductsPageGroupIsLoaded = (state: AppState) => state.productsPageReducer.productsPageGroup.isLoaded

export const getProductsPageGroupSubscriptions = createSelector(getSubscriptionInternal, subscriptions =>
  mapProductsSubscriptions(subscriptions?.content)
)

export const getProductsPageGroupTotalElements = createSelector(
  getSubscriptionInternal,
  subscriptions => subscriptions?.totalElements
)
