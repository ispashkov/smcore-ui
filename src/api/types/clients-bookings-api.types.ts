import { Nullable } from '../../types/lang.types'
import { DictionaryItem, PaymentType, Receipt } from './api.types'

export namespace ClientsBookingsApi {
  export interface ClientBooking {
    id: string
    createDate: string
    exerciseId: string
    exerciseDirection: DictionaryItem<number>
    studio: DictionaryItem
    paymentType: PaymentType
    visitConfirmed: boolean
    isCancelled: boolean
    receipts: Nullable<Receipt[]>
  }
}
