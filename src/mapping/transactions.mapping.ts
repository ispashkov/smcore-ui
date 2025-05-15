import { validateStrEnumValue } from '../utils/enum.utils'
import { formatPenniesToRubles } from '../format/number.format'
import { TransactionsApi } from '../api/types/transactions-api.types'
import { ProductsApi } from '../api/types/products-api.types'
import { TransactionStatus } from '../types/transactions.types'
import { Countable, isDef, isDefAndNotEmpty, NString, Nullable } from '../types/lang.types'
import {
  TransactionsTableDataItem,
  TransactionsTableDataItemProduct,
} from '../components/transactions/transactions-table/transactions-table.types'
import { TransactionsFormValues } from '../components/transactions/transactions-form/transactions-form.types'
import {
  ClientsTransactionsTableDataItem,
  ClientsTransactionsTableDataItemProduct,
} from '../components/clients/clients-transactions-table/clients-transactions-table.types'
import { mapProductTypeToApi } from './products.mapping'
import { ReceiptsListItemData } from '../components/receipts/receipts-list/receipts-list-item/receipts-list-item.types'
import { Receipt } from '../api/types/api.types'

export function mapTransactionsToTransactionsTableDataItemsList(
  transactions: Nullable<TransactionsApi.Transaction[]>
): Nullable<TransactionsTableDataItem[]> {
  if (isDefAndNotEmpty(transactions)) {
    return transactions.reduce<TransactionsTableDataItem[]>(
      (acc: TransactionsTableDataItem[], transaction: TransactionsApi.Transaction) => {
        const status = mapTransactionStatusToClient(transaction.status)

        if (isDef(status)) {
          const products = mapTransactionsProductsToTransactionsTableDataItemsProducts(transaction.products)
          const sum = isDef(transaction.sum) ? formatPenniesToRubles(transaction.sum) : 0

          const transactionsTableDataItem: TransactionsTableDataItem = {
            id: transaction.id,
            date: transaction.createDate,
            phone: transaction.client.phone,
            count: transaction.productsCount || 0,
            sum,
            products,
            status,
          }

          acc.push(transactionsTableDataItem)
        }

        return acc
      },
      []
    )
  }

  return null
}

export function mapTransactionsProductsToTransactionsTableDataItemsProducts(
  products: TransactionsApi.TransactionProduct[]
): TransactionsTableDataItemProduct[] {
  return products.map(
    (product: TransactionsApi.TransactionProduct): TransactionsTableDataItemProduct => ({
      id: product.id,
      name: product.name,
      cost: formatPenniesToRubles(product.cost),
      count: product.count,
    })
  )
}

export function mapTransactionStatusToClient(value: TransactionsApi.TransactionStatus): Nullable<TransactionStatus> {
  return validateStrEnumValue<TransactionStatus>(TransactionStatus, value)
}

export function genTransactionDTO(
  values: TransactionsFormValues,
  studioId: NString,
  products: Nullable<Countable<ProductsApi.Product>[]>
): Nullable<TransactionsApi.TransactionDTO> {
  if (isDef(studioId) && isDefAndNotEmpty(products)) {
    const transactionProductDTOList = genTransactionProductDTO(products)

    if (isDefAndNotEmpty(transactionProductDTOList)) {
      return {
        clientPhone: values.phone,
        paymentMethod: values.paymentMethod,
        products: transactionProductDTOList,
        studioId,
      }
    }
  }

  return null
}

function genTransactionProductDTO(
  products: Nullable<Countable<ProductsApi.Product>[]>
): Nullable<TransactionsApi.TransactionProductDTO[]> {
  if (isDefAndNotEmpty(products)) {
    return products.reduce<TransactionsApi.TransactionProductDTO[]>((acc, product) => {
      const type = mapProductTypeToApi(product.entity.productType)

      if (isDef(type)) {
        const transactionProductDTO: TransactionsApi.TransactionProductDTO = {
          id: product.entity.id,
          count: product.count,
          type,
        }

        acc.push(transactionProductDTO)
      }

      return acc
    }, [])
  }

  return null
}

export function mapTransactionsToClientsTransactionsTableDataItems(
  transactions: Nullable<TransactionsApi.Transaction[]>
): Nullable<ClientsTransactionsTableDataItem[]> {
  if (isDefAndNotEmpty(transactions)) {
    return transactions.reduce<ClientsTransactionsTableDataItem[]>(
      (acc: ClientsTransactionsTableDataItem[], transaction: TransactionsApi.Transaction) => {
        const status = mapTransactionStatusToClient(transaction.status)

        if (isDef(status)) {
          const products = mapTransactionsProductsToClientsTransactionsTableDataItemsProducts(transaction.products)

          const transactionsTableDataItem: ClientsTransactionsTableDataItem = {
            id: transaction.id,
            createDate: transaction.createDate,
            status,
            products,
          }

          acc.push(transactionsTableDataItem)
        }

        return acc
      },
      []
    )
  }

  return null
}

export function mapTransactionsProductsToClientsTransactionsTableDataItemsProducts(
  products: TransactionsApi.TransactionProduct[]
): ClientsTransactionsTableDataItemProduct[] {
  return products.map(
    (product: TransactionsApi.TransactionProduct): ClientsTransactionsTableDataItemProduct => ({
      id: product.id,
      name: product.name,
      cost: formatPenniesToRubles(product.cost),
      count: product.count,
    })
  )
}

export function mapTransactionsReceiptsToReceiptsListItemDataList(
  receipts: Nullable<Receipt[]>
): Nullable<ReceiptsListItemData[]> {
  if (isDefAndNotEmpty(receipts)) {
    return receipts.reduce<ReceiptsListItemData[]>((acc, receipt) => {
      const { id, url, number, createDate } = receipt

      if (isDef(url) && isDef(number) && isDef(createDate)) {
        const receiptsListItemData: ReceiptsListItemData = {
          id,
          createdDate: createDate,
          link: url,
          number: number,
        }

        acc.push(receiptsListItemData)
      }

      return acc
    }, [])
  }

  return null
}
