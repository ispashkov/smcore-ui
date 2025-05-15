import { NNumber } from '../../../../types/lang.types'
import { clientsEditPageReducer } from '../clients-edit-page.reducer'

export type ClientsEditPageBookingsBaseFetchBookingsPayload = {
  clientId: string
  page: NNumber
  size: NNumber
}

export type ClientsEditPageBookingsReducerName = keyof Pick<
  ReturnType<typeof clientsEditPageReducer>,
  'clientsEditPageBookingsActive' | 'clientsEditPageBookingsHistory'
>
