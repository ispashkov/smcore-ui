import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../../app.store'
import { genClientsFormValues, mapClientToClientsInfo } from '../../../../mapping/clients.mapping'

const getClientInternal = (state: AppState) => state.clientsEditPage.clientsEditPageCommon.client

export const getClientsEditPageCommonIsLoaded = (state: AppState) =>
  state.clientsEditPage.clientsEditPageCommon.isLoaded
export const getClientsEditPageCommonIsLoading = (state: AppState) =>
  state.clientsEditPage.clientsEditPageCommon.isLoading

export const genClientsEditPageCommonClientsInfo = createSelector(getClientInternal, mapClientToClientsInfo)
export const getClientsEditPageCommonClientsFormValues = createSelector(getClientInternal, genClientsFormValues)
