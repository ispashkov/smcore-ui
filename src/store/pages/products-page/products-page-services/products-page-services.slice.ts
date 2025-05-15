import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ProductsServicesApi } from '../../../../api/types/products-services-api.types'
import { ProductsPageQueryParams } from '../../../../pages/products-page/products-page.types'

export interface ProductsPageIndividualState {
  services: Nullable<Pagination<ProductsServicesApi.ProductService>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ProductsPageIndividualState = {
  services: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productsPageServicesActions, reducer: productsPageServicesReducer } = createSlice({
  name: '@@products-page-services',
  initialState,
  reducers: {
    fetchAllServices: (state: Draft<ProductsPageIndividualState>, _: PayloadAction<ProductsPageQueryParams>) => {
      state.isLoading = true
    },
    fetchAllServicesSuccess: (
      state: Draft<ProductsPageIndividualState>,
      action: PayloadAction<Nullable<Pagination<ProductsServicesApi.ProductService>>>
    ) => {
      state.services = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllServicesError: (state: Draft<ProductsPageIndividualState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeService: (state: Draft<ProductsPageIndividualState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeServiceSuccess: (state: Draft<ProductsPageIndividualState>) => {
      state.isLoading = false
    },
    removeServiceError: (state: Draft<ProductsPageIndividualState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
