import * as H from 'history'
import { connectRouter } from 'connected-react-router'
import { combineReducers } from '@reduxjs/toolkit'

import { modalReducer } from './common/modal/modal.slice'
import { layoutReducer } from './common/layout/layout.slice'
import { franchisesPageReducer } from './pages/franchises-page/franchises-page.slice'
import { franchisesCreatePageReducer } from './pages/franchises-create-page/franchises-create-page.slice'
import { franchisesEditPageReducer } from './pages/franchises-edit-page/franchises-edit-page.slice'
import { directionsPageReducer } from './pages/directions-page/directions-page.slice'
import { directionsCreatePageReducer } from './pages/directions-create-page/directions-create-page.slice'
import { directionsEditPageReducer } from './pages/directions-edit-page/directions-edit-page.slice'
import { employeesPageReducer } from './pages/employees-page/employees-page.slice'
import { employeesCreatePageReducer } from './pages/employees-create-page/employees-create-page.slice'
import { employeesEditPageReducer } from './pages/employees-edit-page/employees-edit-page.slice'
import { productsPageReducer } from './pages/products-page/products-page.reducer'
import { productsServicesCreatePageReducer } from './pages/products-services-create-page/products-services-create-page.slice'
import { productServicesEditPageReducer } from './pages/products-services-edit-page/products-services-edit-page.slice'
import { productsSubscriptionsCreatePageReducer } from './pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.slice'
import { productsSubscriptionsEditPageReducer } from './pages/products-subscriptions-edit-page/products-subscriptions-edit-page.slice'
import { schedulePageReducer } from './pages/schedule-page/schedule-page.reducer'
import { scheduleManagementPageReducer } from './pages/schedule-management-page/schedule-management-page.reducer'
import { scheduleGroupPageReducer } from './pages/schedule-group-page/schedule-group-page.reducer'
import { studiosPageReducer } from './pages/studios-page/studios-page.slice'
import { studiosCreatePageReducer } from './pages/studios-create-page/studios-create-page.slice'
import { studioEditPageReducer } from './pages/studios-edit-page/studios-edit-page.slice'
import { clientsPageReducer } from './pages/clients-page/clients-page.slice'
import { clientsCreatePageReducer } from './pages/clients-create-page/clients-create-page.slice'
import { clientsEditPageReducer } from './pages/clients-edit-page/clients-edit-page.reducer'
import { transactionsPageReducer } from './pages/transactions-page/transactions-page.slice'
import { transactionsCreatePageReducer } from './pages/transactions-create-page/transactions-create-page.reducer'

export const createAppReducer = (history: H.History) => {
  return combineReducers({
    // region ---- environment
    router: connectRouter(history),
    modal: modalReducer,
    layout: layoutReducer,
    // endregion

    // region ---- pages
    franchisesPage: franchisesPageReducer,
    franchisesCreatePage: franchisesCreatePageReducer,
    franchisesEditPage: franchisesEditPageReducer,

    directionsPage: directionsPageReducer,
    directionsCreatePage: directionsCreatePageReducer,
    directionsEditPage: directionsEditPageReducer,

    employeesPage: employeesPageReducer,
    employeesCreatePage: employeesCreatePageReducer,
    employeesEditPage: employeesEditPageReducer,

    studiosPage: studiosPageReducer,
    studiosCreatePage: studiosCreatePageReducer,
    studioEditPage: studioEditPageReducer,

    productsPageReducer: productsPageReducer,
    productsCreatePageReducer: productsServicesCreatePageReducer,
    productsEditPageReducer: productServicesEditPageReducer,
    productsSubscriptionsCreatePage: productsSubscriptionsCreatePageReducer,
    productsSubscriptionsEditPage: productsSubscriptionsEditPageReducer,

    schedulePage: schedulePageReducer,
    scheduleManagementPage: scheduleManagementPageReducer,
    scheduleGroupPage: scheduleGroupPageReducer,

    clientsPage: clientsPageReducer,
    clientsCreatePage: clientsCreatePageReducer,
    clientsEditPage: clientsEditPageReducer,

    transactionsPage: transactionsPageReducer,
    transactionsCreatePage: transactionsCreatePageReducer,
    // endregion
  })
}
