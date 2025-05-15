import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { DirectionsEditPageUpdateDirectionPayload } from './directions-edit-page.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'

export interface DirectionsEditPageState {
  direction: Nullable<ExercisesDirectionsApi.ExerciseDirection>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: DirectionsEditPageState = {
  direction: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: directionsEditPageActions, reducer: directionsEditPageReducer } = createSlice({
  name: '@@directions-edit-page',
  initialState,
  reducers: {
    fetchDirectionById: (state: Draft<DirectionsEditPageState>, _: PayloadAction<number>) => {
      state.isLoading = true
    },
    fetchDirectionByIdSuccess: (
      state: Draft<DirectionsEditPageState>,
      action: PayloadAction<Nullable<ExercisesDirectionsApi.ExerciseDirection>>
    ) => {
      state.direction = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchDirectionByIdError: (state: Draft<DirectionsEditPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    updateDirection: (
      state: Draft<DirectionsEditPageState>,
      _: PayloadAction<DirectionsEditPageUpdateDirectionPayload>
    ) => {
      state.isLoading = true
    },
    updateDirectionSuccess: (state: Draft<DirectionsEditPageState>) => {
      state.isLoading = false
    },
    updateDirectionError: (state: Draft<DirectionsEditPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
