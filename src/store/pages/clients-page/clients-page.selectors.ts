import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ClientsApi } from '../../../api/types/clients-api.types'
import { mapClientsToClientsTableRowList } from '../../../mapping/clients.mapping'

const getClientsInternal = (state: AppState): Nullable<Pagination<ClientsApi.Client>> => state.clientsPage.clients

export const getClientsIsLoading = (state: AppState): boolean => state.clientsPage.isLoading
export const getClientsIsLoaded = (state: AppState): boolean => state.clientsPage.isLoaded

export const getClientsTableRowList = createSelector(getClientsInternal, clients =>
  mapClientsToClientsTableRowList(clients?.content)
)

export const getClientsTotalElements = createSelector(getClientsInternal, studios => studios?.totalElements)
