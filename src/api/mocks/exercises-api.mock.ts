import { PaymentType } from '../types/api.types'
import { ExercisesApi } from '../types/exercises-api.types'
import { ClientsApi } from '../types/clients-api.types'
import { clientsCategoryMock } from './clients-categories-api.mock'

export const exerciseBookingClientMock: ExercisesApi.ExerciseBookingClient = {
  id: 'exerciseBookingClientMock',
  email: 'test@gmail.com',
  firstName: 'Антонина',
  lastName: 'Христорождественская',
  middleName: null,
  sex: ClientsApi.ClientSex.F,
  photo: null,
  phone: '+7 995 099 95 59',
  birthDate: '1990-08-10',
  withCard: false,
  registrationDate: '2021-09-11',
  lastLogin: '2022-02-03',
  lastVisit: '2022-02-03',
  deposit: 10000,
  source: 'test',
  loyaltyCard: 'test',
  comment: null,
  clientCategory: clientsCategoryMock,
}

export const exerciseBookingMock: ExercisesApi.ExerciseBooking = {
  id: 'exerciseBookingMock',
  client: exerciseBookingClientMock,
  paymentType: PaymentType.SUBSCRIPTION,
  cancellationReason: null,
  cancellationDate: null,
  visitConfirmed: true,
  cancelled: false,
  spot: 1,
}
