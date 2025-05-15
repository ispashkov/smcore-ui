import { DefaultOptionType } from 'antd/lib/select'

import { isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ClientsCategoriesApi } from '../api/types/clients-categories-api.types'

export function mapClientCategoriesToOptions(
  categories: Nullable<ClientsCategoriesApi.ClientCategory[]>
): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(categories)) {
    return categories.map((category: ClientsCategoriesApi.ClientCategory) => ({
      value: category.id,
      label: category.name,
    }))
  }
}
