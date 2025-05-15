import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { StudiosPageParams } from '../../../pages/studios-page/studios-page.types'
import { StudiosFiltersDataSuccessPayload } from './studios-page.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'

export interface StudiosPageState {
  studios: Nullable<Pagination<StudiosApi.Studio>>
  cities: Nullable<string[]>
  countries: Nullable<string[]>
  directions: Nullable<ExercisesDirectionsApi.ExerciseDirection[]>
  organizations: Nullable<OrganizationsApi.Organization[]>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: StudiosPageState = {
  studios: null,
  cities: null,
  directions: null,
  organizations: null,
  countries: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: studiosPageActions, reducer: studiosPageReducer } = createSlice({
  name: '@@studios-page',
  initialState,
  reducers: {
    fetchAllStudios: (state: Draft<StudiosPageState>, _: PayloadAction<StudiosPageParams>) => {
      state.isLoading = true
    },
    fetchAllStudiosSuccess: (
      state: Draft<StudiosPageState>,
      action: PayloadAction<Nullable<Pagination<StudiosApi.Studio>>>
    ) => {
      state.studios = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllStudiosError: (state: Draft<StudiosPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    fetchAllFilters: (state: Draft<StudiosPageState>) => {
      state.isLoading = true
    },
    fetchAllFiltersSuccess: (
      state: Draft<StudiosPageState>,
      action: PayloadAction<StudiosFiltersDataSuccessPayload>
    ) => {
      const { cities, countries, directions, organizations } = action.payload
      state.cities = cities
      state.countries = countries
      state.directions = directions
      state.organizations = organizations
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllFiltersError: (state: Draft<StudiosPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },

    removeStudio: (state: Draft<StudiosPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeStudioSuccess: (state: Draft<StudiosPageState>) => {
      state.isLoading = false
    },
    removeStudioError: (state: Draft<StudiosPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    fetchCities: (state: Draft<StudiosPageState>, action: PayloadAction<string[]>) => {
      state.isLoading = true
      state.cities = action.payload
    },
    fetchCountries: (state: Draft<StudiosPageState>, action: PayloadAction<string[]>) => {
      state.isLoading = true
      state.countries = action.payload
    },
    reset: () => initialState,
  },
})
