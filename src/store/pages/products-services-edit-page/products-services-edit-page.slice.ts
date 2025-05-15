import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import {
  ProductServicesEditPageDataSuccessPayload,
  ProductServicesEditPageUpdateFranchisePayload,
} from './products-services-edit-page.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'
import { ProductsServicesApi } from '../../../api/types/products-services-api.types'

export interface ProductServicesEditPageState {
  service: Nullable<ProductsServicesApi.ProductService>
  studios: Nullable<Pagination<StudiosApi.Studio>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ProductServicesEditPageState = {
  service: null,
  studios: null,
  directions: null,
  exercises: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productServicesEditPageActions, reducer: productServicesEditPageReducer } = createSlice({
  name: '@@productServices-edit-page',
  initialState,
  reducers: {
    fetchPageData: (state: Draft<ProductServicesEditPageState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    fetchPageDataSuccess: (
      state: Draft<ProductServicesEditPageState>,
      action: PayloadAction<ProductServicesEditPageDataSuccessPayload>
    ) => {
      const { service, studios, exercises, directions } = action.payload

      state.service = service
      state.studios = studios
      state.exercises = exercises
      state.directions = directions
      state.isLoading = false
      state.isLoaded = true
    },
    fetchPageDataError: (state: Draft<ProductServicesEditPageState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.error = action.payload
    },
    updateService: (
      state: Draft<ProductServicesEditPageState>,
      _: PayloadAction<ProductServicesEditPageUpdateFranchisePayload>
    ) => {
      state.isLoading = true
    },
    updateServiceSuccess: (state: Draft<ProductServicesEditPageState>) => {
      state.isLoading = false
    },
    updateServiceError: (state: Draft<ProductServicesEditPageState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
