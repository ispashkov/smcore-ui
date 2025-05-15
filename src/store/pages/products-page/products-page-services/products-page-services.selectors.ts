import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapProductsServices } from '../../../../mapping/products-services.mapping'

const getServicesInternal = (state: AppState) => state.productsPageReducer.productsPageServices.services

export const getProductsPageServicesIsLoading = (state: AppState) =>
  state.productsPageReducer.productsPageServices.isLoading
export const getProductsPageServicesIsLoaded = (state: AppState) =>
  state.productsPageReducer.productsPageServices.isLoaded

export const getProductsPageServices = createSelector(getServicesInternal, services =>
  mapProductsServices(services?.content)
)

export const getProductsPageServicesTotalElements = createSelector(
  getServicesInternal,
  services => services?.totalElements
)
