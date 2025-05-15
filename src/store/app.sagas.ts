import { all, spawn } from 'redux-saga/effects'

import { layoutSagas } from './common/layout/layout.sagas'
import { franchisesPageSagas } from './pages/franchises-page/franchises-page.sagas'
import { franchisesCreatePageSagas } from './pages/franchises-create-page/franchises-create-page.sagas'
import { franchisesEditPageSagas } from './pages/franchises-edit-page/franchises-edit-page.sagas'
import { directionsPageSagas } from './pages/directions-page/directions-page.sagas'
import { directionsCreatePageSagas } from './pages/directions-create-page/directions-create-page.sagas'
import { directionsEditPageSagas } from './pages/directions-edit-page/directions-edit-page.sagas'
import { employeesPageSagas } from './pages/employees-page/employees-page.sagas'
import { employeesCreatePageSagas } from './pages/employees-create-page/employees-create-page.sagas'
import { employeesEditPageSagas } from './pages/employees-edit-page/employees-edit-page.sagas'
import { productsPageSagas } from './pages/products-page/products-page.sagas'
import { productsServicesCreatePageSagas } from './pages/products-services-create-page/products-services-create-page.sagas'
import { productsServicesEditPageSagas } from './pages/products-services-edit-page/products-services-edit-page.sagas'
import { productsSubscriptionsEditPageSagas } from './pages/products-subscriptions-edit-page/products-subscriptions-edit-page.sagas'
import { productsSubscriptionsCreatePageSagas } from './pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.sagas'
import { schedulePageSagas } from './pages/schedule-page/schedule-page.sagas'
import { scheduleManagementPageSagas } from './pages/schedule-management-page/schedule-management-page.sagas'
import { scheduleGroupPageSagas } from './pages/schedule-group-page/schedule-group-page.sagas'
import { studiosPageSagas } from './pages/studios-page/studios-page.sagas'
import { studiosCreatePageSagas } from './pages/studios-create-page/studios-create-page.sagas'
import { studiosEditPageSagas } from './pages/studios-edit-page/studios-edit-page.sagas'
import { transactionsPageSagas } from './pages/transactions-page/transactions-page.sagas'
import { transactionsCreatePageSagas } from './pages/transactions-create-page/transactions-create-page.sagas'
import { clientsPageSagas } from './pages/clients-page/clients-page.sagas'
import { clientsCreatePageSagas } from './pages/clients-create-page/clients-create-page.sagas'
import { clientsEditPageSagas } from './pages/clients-edit-page/clients-edit-page.sagas'

export function* appSagas() {
  yield all(
    [
      layoutSagas,

      franchisesPageSagas,
      franchisesCreatePageSagas,
      franchisesEditPageSagas,

      directionsPageSagas,
      directionsCreatePageSagas,
      directionsEditPageSagas,

      employeesPageSagas,
      employeesCreatePageSagas,
      employeesEditPageSagas,

      studiosPageSagas,
      studiosCreatePageSagas,
      studiosEditPageSagas,

      productsPageSagas,
      productsServicesCreatePageSagas,
      productsServicesEditPageSagas,
      productsSubscriptionsCreatePageSagas,
      productsSubscriptionsEditPageSagas,

      schedulePageSagas,
      scheduleManagementPageSagas,
      scheduleGroupPageSagas,

      clientsPageSagas,
      clientsCreatePageSagas,
      clientsEditPageSagas,

      transactionsPageSagas,
      transactionsCreatePageSagas,
    ].map(saga => spawn(saga))
  )
}
