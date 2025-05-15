import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapClientCategoriesToOptions } from '../../../mapping/clients-categories.mapping'

const getClientCategoryInternal = (state: AppState) => state.clientsCreatePage.clientsCategories

export const getClientsCreatePageIsLoading = (state: AppState) => state.clientsCreatePage.isLoading
export const getClientsCreatePageIsCreating = (state: AppState) => state.clientsCreatePage.isCreating

export const getClientsCreatePageCategoryOptions = createSelector(getClientCategoryInternal, categories =>
  mapClientCategoriesToOptions(categories?.content)
)
