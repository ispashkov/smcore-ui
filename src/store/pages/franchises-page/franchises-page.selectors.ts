import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapFranchisesToFranchisesTableRowList } from '../../../mapping/franchises.mapping'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'

const getFranchisesInternal = (state: AppState): Nullable<Pagination<OrganizationsApi.Organization>> =>
  state.franchisesPage.franchises

export const genFranchisesIsLoading = (state: AppState): boolean => state.franchisesPage.isLoading

export const genFranchisesTableRowList = createSelector(getFranchisesInternal, franchises =>
  mapFranchisesToFranchisesTableRowList(franchises?.content)
)

export const genFranchisesTotalElements = createSelector(getFranchisesInternal, franchises => franchises?.totalElements)
