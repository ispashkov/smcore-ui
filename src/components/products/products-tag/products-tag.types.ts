export interface ProductsTagI {
  id: string
  title: string
}

export interface ProductsTagEvents {
  onSelect: (id: string) => void
  onReset: () => void
}
