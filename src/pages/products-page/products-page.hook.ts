import { useProductsPageParams } from './products-page-hooks/products-page-params.hook'

export function useProductsPage() {
  const { section } = useProductsPageParams()

  return {
    section,
  }
}
