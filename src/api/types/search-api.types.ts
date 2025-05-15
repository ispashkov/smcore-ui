export namespace SearchApi {
  export interface SearchParams {
    q: string
  }

  export interface SearchItem {
    id: string
    label: string
    details: string
  }
}
