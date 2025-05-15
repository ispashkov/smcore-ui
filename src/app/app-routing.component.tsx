import * as React from 'react'
import { Switch } from 'react-router-dom'

import { PrivateRoute } from '../components/private-route/private-route.component'
import { AppPath } from '../types/path.types'
import { HomePage } from '../pages/home-page/home-page.component'
import { NotFoundPage } from '../pages/not-found-page/not-found-page.component'
import { FranchisesPage } from '../pages/franchises-page/franchises-page.component'
import { FranchisesCreatePage } from '../pages/franchises-create-page/franchises-create-page.component'
import { FranchisesEditPage } from '../pages/franchises-edit-page/franchises-edit-page.component'
import { DirectionsPage } from '../pages/directions-page/directions-page.component'
import { DirectionsCreatePage } from '../pages/directions-create-page/directions-create-page.component'
import { DirectionsEditPage } from '../pages/directions-edit-page/directions-edit-page.component'
import { EmployeesPage } from '../pages/employees-page/employees-page.component'
import { EmployeesCreatePage } from '../pages/employees-create-page/employees-create-page.component'
import { EmployeesEditPage } from '../pages/employees-edit-page/employees-edit-page.component'
import { ProductsPage } from '../pages/products-page/products-page.component'
import { ProductsSubscriptionCreatePage } from '../pages/products-subscriptions-сreate-page/products-subscriptions-сreate-page.component'
import { ProductsSubscriptionsEditPage } from '../pages/products-subscriptions-edit-page/products-subscriptions-edit-page.component'
import { ProductsServiceCreatePage } from '../pages/products-services-create-page/products-services-create-page.component'
import { ServiceEditPage } from '../pages/products-services-edit-page/products-services-edit-page.component'
import { SchedulePage } from '../pages/schedule-page/schedule-page.component'
import { ScheduleManagementPage } from '../pages/schedule-management-page/schedule-management-page.component'
import { ScheduleGroupPage } from '../pages/schedule-group-page/schedule-group-page.component'
import { DiscountsPage } from '../pages/discounts-page/discounts-page.component'
import { TransactionsPage } from '../pages/transactions-page/transactions-page.component'
import { TransactionsCreatePage } from '../pages/transactions-create-page/transactions-create-page.component'
import { SettingsPage } from '../pages/settings-page/settings-page.component'
import { StudiosPageComponent } from '../pages/studios-page/studios-page.component'
import { StudiosCreatePageComponent } from '../pages/studios-create-page/studios-create-page.component'
import { StudiosEditPageComponent } from '../pages/studios-edit-page/studios-edit-page.component'
import { ClientsPage } from '../pages/clients-page/clients-page.component'
import { ClientsCreatePage } from '../pages/clients-create-page/clients-create-page.component'
import { ClientsEditPage } from '../pages/clients-edit-page/clients-edit-page.component'

const AppRoutingInternal: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path={AppPath.HOME} component={HomePage} exact={true} />

      <PrivateRoute path={AppPath.FRANCHISES} component={FranchisesPage} exact={true} />
      <PrivateRoute path={AppPath.FRANCHISES_CREATE} component={FranchisesCreatePage} exact={true} />
      <PrivateRoute path={AppPath.FRANCHISES_EDIT} component={FranchisesEditPage} exact={true} />

      <PrivateRoute path={AppPath.DIRECTIONS} component={DirectionsPage} exact={true} />
      <PrivateRoute path={AppPath.DIRECTIONS_CREATE} component={DirectionsCreatePage} exact={true} />
      <PrivateRoute path={AppPath.DIRECTIONS_EDIT} component={DirectionsEditPage} exact={true} />

      <PrivateRoute path={AppPath.EMPLOYEES} component={EmployeesPage} exact={true} />
      <PrivateRoute path={AppPath.EMPLOYEES_CREATE} component={EmployeesCreatePage} exact={true} />
      <PrivateRoute path={AppPath.EMPLOYEES_EDIT} component={EmployeesEditPage} exact={true} />

      <PrivateRoute path={AppPath.PRODUCTS} component={ProductsPage} exact={true} />
      <PrivateRoute
        path={AppPath.PRODUCTS_CREATE_SUBSCRIPTION}
        component={ProductsSubscriptionCreatePage}
        exact={true}
      />
      <PrivateRoute path={AppPath.PRODUCTS_EDIT_SUBSCRIPTION} component={ProductsSubscriptionsEditPage} exact={true} />
      <PrivateRoute path={AppPath.PRODUCTS_CREATE_SERVICE} component={ProductsServiceCreatePage} exact={true} />
      <PrivateRoute path={AppPath.PRODUCTS_EDIT_SERVICE} component={ServiceEditPage} exact={true} />

      <PrivateRoute path={AppPath.SCHEDULE} component={SchedulePage} exact={true} />
      <PrivateRoute path={AppPath.SCHEDULE_MANAGEMENT} component={ScheduleManagementPage} exact={true} />
      <PrivateRoute path={AppPath.SCHEDULE_GROUP} component={ScheduleGroupPage} exact={true} />

      <PrivateRoute path={AppPath.DISCOUNTS} component={DiscountsPage} exact={true} />

      <PrivateRoute path={AppPath.TRANSACTIONS} component={TransactionsPage} exact={true} />
      <PrivateRoute path={AppPath.TRANSACTIONS_CREATE} component={TransactionsCreatePage} exact={true} />

      <PrivateRoute path={AppPath.SETTINGS} component={SettingsPage} exact={true} />

      <PrivateRoute path={AppPath.STUDIOS} component={StudiosPageComponent} exact={true} />
      <PrivateRoute path={AppPath.STUDIOS_CREATE} component={StudiosCreatePageComponent} exact={true} />
      <PrivateRoute path={AppPath.STUDIOS_EDIT} component={StudiosEditPageComponent} exact={true} />

      <PrivateRoute path={AppPath.CLIENTS} component={ClientsPage} exact={true} />
      <PrivateRoute path={AppPath.CLIENTS_CREATE} component={ClientsCreatePage} exact={true} />
      <PrivateRoute path={AppPath.CLIENTS_EDIT} component={ClientsEditPage} exact={true} />

      <PrivateRoute path={AppPath.NOT_FOUND} component={NotFoundPage} />
    </Switch>
  )
}

export const AppRouting = React.memo(AppRoutingInternal)
