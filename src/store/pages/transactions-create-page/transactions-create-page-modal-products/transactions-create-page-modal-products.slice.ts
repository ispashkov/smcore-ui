import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ProductsApi } from '../../../../api/types/products-api.types'
import { TransactionsCreatePageModalProductsFetchProductsPayload } from './transactions-create-page-modal-products.types'

export interface TransactionsPageCreateModalProductsState {
  products: Nullable<Pagination<ProductsApi.Product>>
  isLoaded: boolean
  isLoading: boolean
  error: Nullable<Error>
}

const initialState: TransactionsPageCreateModalProductsState = {
  products: null,
  isLoaded: false,
  isLoading: false,
  error: null,
}

export const {
  actions: transactionsCreatePageModalProductsActions,
  reducer: transactionsCreatePageModalProductsReducer,
} = createSlice({
  name: '@@transactions-create-page-modal-products',
  initialState,
  reducers: {
    fetchProducts: (
      state: Draft<TransactionsPageCreateModalProductsState>,
      _: PayloadAction<Partial<TransactionsCreatePageModalProductsFetchProductsPayload>>
    ) => {
      state.isLoading = true
    },
    fetchProductsSuccess: (
      state: Draft<TransactionsPageCreateModalProductsState>,
      action: PayloadAction<Nullable<Pagination<ProductsApi.Product>>>
    ) => {
      state.products = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    fetchProductsError: (state: Draft<TransactionsPageCreateModalProductsState>, action: PayloadAction<Error>) => {
      state.error = action.payload
      state.isLoading = false
      state.isLoaded = true
    },
    addProduct: (_state: Draft<TransactionsPageCreateModalProductsState>, _: PayloadAction<string>) => {},
    reset: () => initialState,
  },
})
