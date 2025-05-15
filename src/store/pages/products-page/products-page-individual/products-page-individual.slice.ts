import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ProductsSubscriptionsApi } from '../../../../api/types/products-subscriptions-api.types'
import { ProductsPageQueryParams } from '../../../../pages/products-page/products-page.types'

export interface ProductsPageIndividualState {
  subscriptions: Nullable<Pagination<ProductsSubscriptionsApi.ProductSubscription>>
  isLoading: boolean
  isLoaded: boolean
  error: Nullable<Error>
}

const initialState: ProductsPageIndividualState = {
  subscriptions: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const { actions: productsPageIndividualActions, reducer: productsPageIndividualReducer } = createSlice({
  name: '@@products-page-individual',
  initialState,
  reducers: {
    fetchAllSubscriptions: (state: Draft<ProductsPageIndividualState>, _: PayloadAction<ProductsPageQueryParams>) => {
      state.isLoading = true
    },
    fetchAllSubscriptionsSuccess: (
      state: Draft<ProductsPageIndividualState>,
      action: PayloadAction<Nullable<Pagination<ProductsSubscriptionsApi.ProductSubscription>>>
    ) => {
      state.subscriptions = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchAllSubscriptionsError: (state: Draft<ProductsPageIndividualState>, action: PayloadAction<Error>) => {
      state.isLoading = false
      state.isLoaded = true
      state.error = action.payload
    },
    removeSubscription: (state: Draft<ProductsPageIndividualState>, _: PayloadAction<string>) => {
      state.isLoading = true
    },
    removeSubscriptionSuccess: (state: Draft<ProductsPageIndividualState>) => {
      state.isLoading = false
    },
    removeSubscriptionError: (state: Draft<ProductsPageIndividualState>, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
    reset: () => initialState,
  },
})
