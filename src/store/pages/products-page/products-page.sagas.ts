import { all, spawn } from 'redux-saga/effects'

import { productsPageGroupSagas } from './products-page-group/products-page-group.sagas'
import { productsPageIndividualSagas } from './products-page-individual/products-page-individual.sagas'
import { productsPageServicesSagas } from './products-page-services/products-page-services.sagas'

export function* productsPageSagas() {
  yield all([productsPageGroupSagas, productsPageIndividualSagas, productsPageServicesSagas].map(saga => spawn(saga)))
}
