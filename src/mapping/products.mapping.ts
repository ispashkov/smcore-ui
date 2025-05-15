import { TransactionsProductsTableDataItem } from '../components/transactions/transactions-products-table/transactions-products-table.types'
import { TransactionsProductsModalTableDataItem } from '../components/transactions/transactions-products-modal/transactions-products-modal-table/transactions-products-modal-table.types'
import { formatPenniesToRubles } from '../format/number.format'
import { ProductsApi } from '../api/types/products-api.types'
import { ProductType } from '../types/products.types'
import { Countable, isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { validateStrEnumValue } from '../utils/enum.utils'

export function mapProductsToTransactionsProductsModalTableDataItemsList(
  products: Nullable<ProductsApi.Product[]>
): Nullable<TransactionsProductsModalTableDataItem[]> {
  if (isDefAndNotEmpty(products)) {
    return products.reduce<TransactionsProductsModalTableDataItem[]>(
      (acc: TransactionsProductsModalTableDataItem[], product: ProductsApi.Product) => {
        const productType = mapProductTypeToClient(product.productType)

        if (isDef(productType)) {
          const transactionsProductsModalTableDataItem: TransactionsProductsModalTableDataItem = {
            id: product.id,
            name: product.name,
            photo: product.photo,
            price: formatPenniesToRubles(product.cost),
          }

          acc.push(transactionsProductsModalTableDataItem)
        }

        return acc
      },
      []
    )
  }

  return null
}

export function mapProductTypeToClient(value: Nullable<ProductsApi.ProductType>): Nullable<ProductType> {
  return validateStrEnumValue<ProductType>(ProductType, value)
}

export function mapProductTypeToApi(value: Nullable<ProductType>): Nullable<ProductsApi.ProductType> {
  return validateStrEnumValue<ProductType>(ProductsApi.ProductType, value)
}

export function mapProductToCountable(product: ProductsApi.Product): Countable<ProductsApi.Product> {
  return {
    entity: product,
    count: 1,
  }
}

export function mapCountableProductsToTransactionsProductsTableDataItem(
  products: Nullable<Countable<ProductsApi.Product>[]>
): Nullable<TransactionsProductsTableDataItem[]> {
  if (isDefAndNotEmpty(products)) {
    return products.map(product => ({
      id: product.entity.id,
      name: product.entity.name,
      photo: product.entity.photo,
      price: formatPenniesToRubles(product.entity.cost),
      count: product.count,
    }))
  }

  return null
}
