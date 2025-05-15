import { combineReducers } from '@reduxjs/toolkit'

import { productsPageGroupReducer } from './products-page-group/products-page-group.slice'
import { productsPageIndividualReducer } from './products-page-individual/products-page-individual.slice'
import { productsPageServicesReducer } from './products-page-services/products-page-services.slice'

export const productsPageReducer = combineReducers({
  productsPageGroup: productsPageGroupReducer,
  productsPageIndividual: productsPageIndividualReducer,
  productsPageServices: productsPageServicesReducer,
})
