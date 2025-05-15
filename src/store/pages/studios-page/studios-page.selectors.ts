import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import {
  mapStudiosCitiesToOptions,
  mapStudiosCountriesToOptions,
  mapStudiosToStudiosTableRowList,
} from '../../../mapping/studios.mapping'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'
import { mapFranchisesToOptions } from '../../../mapping/franchises.mapping'

const getStudiosInternal = (state: AppState): Nullable<Pagination<StudiosApi.Studio>> => state.studiosPage.studios
const getStudiosCitiesInternal = (state: AppState): Nullable<string[]> => state.studiosPage.cities
const getStudiosCountriesInternal = (state: AppState): Nullable<string[]> => state.studiosPage.countries
const getStudiosDirectionsInternal = (state: AppState): Nullable<ExercisesDirectionsApi.ExerciseDirection[]> =>
  state.studiosPage.directions
const getStudiosOrganizationsInternal = (state: AppState): Nullable<OrganizationsApi.Organization[]> =>
  state.studiosPage.organizations

export const genStudiosIsLoading = (state: AppState): boolean => state.studiosPage.isLoading

export const genStudiosTableRowList = createSelector(getStudiosInternal, studios =>
  mapStudiosToStudiosTableRowList(studios?.content)
)

export const genStudiosTotalElements = createSelector(getStudiosInternal, studios => studios?.totalElements)

export const getCitiesOptions = createSelector(getStudiosCitiesInternal, cities => mapStudiosCitiesToOptions(cities))

export const getCountriesOptions = createSelector(getStudiosCountriesInternal, countries =>
  mapStudiosCountriesToOptions(countries)
)

export const getDirectionsOptions = createSelector(getStudiosDirectionsInternal, directions =>
  mapDirectionsToOptions(directions)
)

export const getOrganizationsOptions = createSelector(getStudiosOrganizationsInternal, organizations =>
  mapFranchisesToOptions(organizations)
)
