import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { transactionsCreatePageModalProductsActions } from '../../../store/pages/transactions-create-page/transactions-create-page-modal-products/transactions-create-page-modal-products.slice'
import {
  getTransactionsCreatePageModalProductsIsLoaded,
  getTransactionsCreatePageModalProductsIsLoading,
  getTransactionsCreatePageModalProductsTableDataItems,
  getTransactionsCreatePageModalProductsTotalElements,
} from '../../../store/pages/transactions-create-page/transactions-create-page-modal-products/transactions-create-page-modal-products.selectors'
import {
  TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCT_INITIAL_PAGE,
  TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCT_INITIAL_SIZE,
} from './transactions-create-page-modal-products.types'

export function useTransactionsCreatePageModalProducts() {
  const dispatch = useDispatch()

  const [page, setPage] = React.useState(TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCT_INITIAL_PAGE)
  const [pageSize, setPageSize] = React.useState(TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCT_INITIAL_SIZE)

  const products = useSelector(getTransactionsCreatePageModalProductsTableDataItems)
  const totalElements = useSelector(getTransactionsCreatePageModalProductsTotalElements)
  const loading = useSelector(getTransactionsCreatePageModalProductsIsLoading)
  const loaded = useSelector(getTransactionsCreatePageModalProductsIsLoaded)

  const pagination = React.useMemo(
    () => genPaginationConfig(page, pageSize, totalElements),
    [page, pageSize, totalElements]
  )

  React.useEffect((): void => {
    dispatch(
      transactionsCreatePageModalProductsActions.fetchProducts({
        page: page,
        size: pageSize,
      })
    )
  }, [dispatch, page, pageSize])

  React.useEffect(() => {
    return () => {
      dispatch(transactionsCreatePageModalProductsActions.reset())
    }
  }, [dispatch])

  const onAddHandler = React.useCallback(
    (productId: string): void => {
      dispatch(transactionsCreatePageModalProductsActions.addProduct(productId))
    },
    [dispatch]
  )

  const onChangePageHandler = React.useCallback((page: number, pageSize: number): void => {
    setPage(page)
    setPageSize(pageSize)
  }, [])

  const onChangePageSizeHandler = React.useCallback((pageSize: number): void => {
    setPageSize(pageSize)
  }, [])

  const onCancelHandler = React.useCallback((): void => {
    dispatch(modalActions.closeLast())
  }, [dispatch])

  const onSearchHandler = React.useCallback(
    (name: string): void => {
      dispatch(
        transactionsCreatePageModalProductsActions.fetchProducts({
          name,
          page: TRANSACTIONS_CREATE_PAGE_MODAL_PRODUCT_INITIAL_PAGE,
          size: pageSize,
        })
      )
    },
    [dispatch, pageSize]
  )

  return {
    products,
    loading,
    loaded,
    pagination,

    onAddHandler,
    onChangePageHandler,
    onChangePageSizeHandler,
    onCancelHandler,
    onSearchHandler,
  }
}
