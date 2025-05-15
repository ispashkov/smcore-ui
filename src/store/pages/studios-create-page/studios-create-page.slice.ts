import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { StudiosFormTypes } from '../../../components/studios/studios-form/studios-form-types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'

export interface StudiosCreatePageState {
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: StudiosCreatePageState = {
  franchises: null,
  directions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: studiosCreatePageActions, reducer: studiosCreatePageReducer } = createSlice({
  name: '@@studios-create-page',
  initialState,
  reducers: {
    createStudio: (state: Draft<StudiosCreatePageState>, _: PayloadAction<StudiosFormTypes>) => {
      state.isLoading = true
    },
    createStudioSuccess: (state: Draft<StudiosCreatePageState>) => {
      state.isLoading = false
    },
    createStudioError: (state: Draft<StudiosCreatePageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    fetchAllFranchises: (state: Draft<StudiosCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllFranchisesSuccess: (
      state: Draft<StudiosCreatePageState>,
      action: PayloadAction<Nullable<Pagination<OrganizationsApi.Organization>>>
    ) => {
      state.franchises = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchFranchisesError: (state: Draft<StudiosCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    fetchAllDirections: (state: Draft<StudiosCreatePageState>) => {
      state.isLoading = true
    },
    fetchAllDirectionsSuccess: (
      state: Draft<StudiosCreatePageState>,
      action: PayloadAction<Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>>
    ) => {
      state.directions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchDirectionsError: (state: Draft<StudiosCreatePageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
