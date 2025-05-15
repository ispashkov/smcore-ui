import { ClientsApi } from './clients-api.types'
import { PaginationParamsDTO, PaymentMethod, ProductType, Receipt } from './api.types'
import { Nullable } from '../../types/lang.types'

export namespace TransactionsApi {
  import Client = ClientsApi.Client

  export type TransactionClient = Pick<Client, 'id' | 'firstName' | 'lastName' | 'middleName' | 'phone'>

  export enum TransactionStatus {
    PAID = 'PAID',
    UNPAID = 'UNPAID',
    REFUND = 'REFUND',
  }

  export interface TransactionCardPaymentInfo {
    paymentId: string
    paymentUrl: string
    status: string
  }

  export interface TransactionProduct {
    id: string
    name: string
    cost: number
    count: number
  }

  export interface Transaction {
    id: string
    createDate: string
    client: TransactionClient
    products: TransactionProduct[]
    productsCount: number
    sum: number
    toPay: number
    status: TransactionStatus
    cardPaymentInfo: TransactionCardPaymentInfo
    receipts: Nullable<Receipt[]>
  }

  export interface TransactionsFetchAllParams extends PaginationParamsDTO {
    studioId?: string
  }

  export interface TransactionProductDTO {
    id: string
    type: ProductType
    count: number
  }

  export interface TransactionDTO {
    products: TransactionProductDTO[]
    clientPhone: string
    paymentMethod: PaymentMethod
    studioId: string
  }
}
