import { createSelector } from '@reduxjs/toolkit'

import { mapProductsToTransactionsProductsModalTableDataItemsList } from '../../../../mapping/products.mapping'
import { AppState } from '../../../app.store'
import { Dict, isDefAndNotEmpty, Nullable } from '../../../../types/lang.types'
import { Pagination } from '../../../../api/types/api.types'
import { ProductsApi } from '../../../../api/types/products-api.types'

const getProductsInternal = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageModalProducts.products

export const getTransactionsCreatePageModalProductsIsLoading = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageModalProducts.isLoading

export const getTransactionsCreatePageModalProductsIsLoaded = (state: AppState) =>
  state.transactionsCreatePage.transactionsCreatePageModalProducts.isLoaded

export const getTransactionsCreatePageModalProductsTableDataItems = createSelector(getProductsInternal, products =>
  mapProductsToTransactionsProductsModalTableDataItemsList(products?.content)
)

export const getTransactionsCreatePageModalProductsTotalElements = createSelector(
  getProductsInternal,
  products => products?.totalElements
)

export const getTransactionsCreatePageModalProductsMapById = createSelector(
  getProductsInternal,
  (items: Nullable<Pagination<ProductsApi.Product>>): Nullable<Dict<ProductsApi.Product>> => {
    const products = items?.content

    if (isDefAndNotEmpty(products)) {
      return products.reduce<Dict<ProductsApi.Product>>((acc, product) => {
        acc[product.id] = product

        return acc
      }, {})
    }

    return null
  }
)
