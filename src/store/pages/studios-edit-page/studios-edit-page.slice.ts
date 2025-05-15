import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { StudioPageDataSuccessPayload, StudiosEditPageUpdatePayload } from './studios-edit-page.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'

export interface StudiosEditPageState {
  studio: Nullable<StudiosApi.Studio>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: StudiosEditPageState = {
  studio: null,
  franchises: null,
  directions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: studiosEditPageActions, reducer: studioEditPageReducer } = createSlice({
  name: '@@studio-edit-page',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<StudiosEditPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (state: Draft<StudiosEditPageState>, action: PayloadAction<StudioPageDataSuccessPayload>) => {
      const { studio, franchises, directions } = action.payload

      state.studio = studio
      state.franchises = franchises
      state.directions = directions
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<StudiosEditPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    updateStudio: (state: Draft<StudiosEditPageState>, _: PayloadAction<StudiosEditPageUpdatePayload>) => {
      state.isLoading = true
    },
    updateStudioSuccess: (state: Draft<StudiosEditPageState>) => {
      state.isLoading = false
    },
    updateStudioError: (state: Draft<StudiosEditPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
