import { NNumber, NString, Nullable } from '../../types/lang.types'

export interface Range<T> {
  from: T
  to: T
}

export enum Days {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

export type DaysRange = Range<Days>

export type TimeRange = Range<string>

export type WorkTime = {
  days: DaysRange
  time: TimeRange
}

export interface PaginationParamsDTO {
  page: NNumber
  size: NNumber
  sort: NString
}

export type Pagination<T> = {
  totalPages: number
  totalElements: number
  pageable: PaginationPageable
  sort: PaginationSort
  numberOfElements: number
  first: boolean
  last: boolean
  size: number
  content: Nullable<T[]>
  number: number
  empty: boolean
}

type PaginationSort = {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

type PaginationPageable = {
  paged: boolean
  unpaged: boolean
  pageNumber: number
  pageSize: number
  sort: PaginationSort
  offset: number
}

export type DictionaryItem<ID = string> = {
  id: ID
  name: string
}

export type ColoredDictionaryItem<ID = string> = {
  id: ID
  name: string
  color: string
}

export type Rate = {
  juniorRate: number
  middleRate: number
  seniorRate: number
  leadRate: number
  directionId: number
  roomId: string
}

export enum PaymentType {
  SUBSCRIPTION = 'SUBSCRIPTION',
  ON_PLACE = 'ON_PLACE',
  TRIAL = 'TRIAL',
  ONE_TIME = 'ONE_TIME',
}

export enum PaymentMethod {
  CARD = 'CARD',
  CASH = 'CASH',
  SMS = 'SMS',
  QR = 'QR',
}

export enum ProductType {
  SERVICE = 'SERVICE',
  SUBSCRIPTION = 'SUBSCRIPTION',
  GOODS = 'GOODS',
}

export enum TimeLimitation {
  NONE = 'NONE',
  UNTIL_1645 = 'UNTIL_1645',
}

export interface Receipt {
  id: string
  number: NString
  createDate: NString
  url: NString
}
