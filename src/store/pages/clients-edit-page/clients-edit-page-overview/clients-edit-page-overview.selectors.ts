import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { mapClientCategoriesToOptions } from '../../../../mapping/clients-categories.mapping'

const getClientsCategoriesInternal = (state: AppState) =>
  state.clientsEditPage.clientsEditPageOverview.clientsCategories

export const getClientsEditPageOverviewIsLoaded = (state: AppState) =>
  state.clientsEditPage.clientsEditPageOverview.isLoaded
export const getClientsEditPageOverviewIsLoading = (state: AppState) =>
  state.clientsEditPage.clientsEditPageOverview.isLoading
export const getClientsEditPageOverviewIsUpdating = (state: AppState) =>
  state.clientsEditPage.clientsEditPageOverview.isUpdating

export const getClientsEditPageOverviewCategoryOptions = createSelector(getClientsCategoriesInternal, categories =>
  mapClientCategoriesToOptions(categories?.content)
)
