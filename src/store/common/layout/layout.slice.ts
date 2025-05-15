import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { Theme } from '../../../types/theme.types'

export interface LayoutState {
  studios: Nullable<Pagination<StudiosApi.Studio>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
  theme: Nullable<Theme>
  themeIsInitialized: boolean
}

export const initialState: LayoutState = {
  studios: null,
  isLoading: false,
  isLoaded: false,
  error: null,
  theme: null,
  themeIsInitialized: false,
}

export const { actions: layoutActions, reducer: layoutReducer } = createSlice({
  name: '@@layout',
  initialState,
  reducers: {
    fetchAllDictionaries: (state: Draft<LayoutState>) => {
      state.isLoading = true
    },
    fetchAllDictionariesSuccess: (state: Draft<LayoutState>, action: PayloadAction<Pagination<StudiosApi.Studio>>) => {
      state.studios = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllDictionariesError: (state: Draft<LayoutState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },

    changeTheme: (state: Draft<LayoutState>, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
    initializeTheme: () => {},
    initializeThemeSuccess: (state: Draft<LayoutState>) => {
      state.themeIsInitialized = true
    },

    reset: () => initialState,
  },
})
