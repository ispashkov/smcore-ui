import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { genPaginationConfig } from '../../../utils/pagination.utils'
import { genTransactionsPagePath } from '../../../format/path.format'
import { TransactionsTableDataItem } from '../../../components/transactions/transactions-table/transactions-table.types'
import { modalActions } from '../../../store/common/modal/modal.slice'
import { AppModal } from '../../../types/modal.types'
import {
  getTransactionsPageIsLoading,
  getTransactionsPageTableItemsList,
  getTransactionsPageTableTotalElements,
} from '../../../store/pages/transactions-page/transactions-page.selectors'
import { useTransactionsPageParams } from '../transactions-page-hooks/transactions-page-params.hook'

export function useTransactionsPageTable() {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const { studioId, page, size } = useTransactionsPageParams()

  const transactions = useSelector(getTransactionsPageTableItemsList)
  const totalElements = useSelector(getTransactionsPageTableTotalElements)
  const isLoading = useSelector(getTransactionsPageIsLoading)

  const pagination = React.useMemo(() => genPaginationConfig(page, size, totalElements), [page, size, totalElements])

  const onChangePageHandler = React.useCallback(
    (page: number, pageSize: number): void => {
      push(genTransactionsPagePath(studioId, { page: page, size: pageSize }))
    },
    [push, studioId]
  )

  const onChangePageSizeHandler = React.useCallback(
    (pageSize: number): void => {
      push(genTransactionsPagePath(studioId, { page, size: pageSize }))
    },
    [page, push, studioId]
  )

  const onBarcodeHandler = React.useCallback(
    (transaction: TransactionsTableDataItem): void => {
      dispatch(
        modalActions.show({
          modal: AppModal.TRANSACTIONS_PAGE_RECEIPTS_MODAL,
          props: { transactionId: transaction.id },
        })
      )
    },
    [dispatch]
  )

  return {
    transactions,
    pagination,
    isLoading,

    onChangePageHandler,
    onChangePageSizeHandler,
    onBarcodeHandler,
  }
}
