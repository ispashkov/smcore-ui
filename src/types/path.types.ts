export type InternalPath = string

export type RoutePathParams = { [paramName: string]: string | number | boolean | undefined }

export enum AppPath {
  HOME = '/',
  NOT_FOUND = '*',

  SCHEDULE = '/schedule/:studioId',
  SCHEDULE_GROUP = '/schedule/:studioId/:scheduleId',
  SCHEDULE_MANAGEMENT = '/schedule/:studioId/management',

  DISCOUNTS = '/discounts',
  TRANSACTIONS = '/transactions/:studioId',
  TRANSACTIONS_CREATE = '/transactions/:studioId/create',

  PRODUCTS = '/products/:section?',
  PRODUCTS_CREATE_SUBSCRIPTION = '/products/create/subscription/:type',
  PRODUCTS_EDIT_SUBSCRIPTION = '/products/edit/subscription/:type/:id',
  PRODUCTS_CREATE_SERVICE = '/products/create/service',
  PRODUCTS_EDIT_SERVICE = '/products/edit/service/:id',

  STUDIOS = '/studios',
  STUDIOS_CREATE = '/studios/create',
  STUDIOS_EDIT = '/studios/:id',

  SETTINGS = '/settings',

  FRANCHISES = '/franchises',
  FRANCHISES_CREATE = '/franchises/create',
  FRANCHISES_EDIT = '/franchises/:id',

  EMPLOYEES = '/employees',
  EMPLOYEES_CREATE = '/employees/create',
  EMPLOYEES_EDIT = '/employees/:id',

  DIRECTIONS = '/directions',
  DIRECTIONS_CREATE = '/directions/create',
  DIRECTIONS_EDIT = '/directions/:id',

  CLIENTS = '/clients',
  CLIENTS_CREATE = '/clients/create',
  CLIENTS_EDIT = '/clients/:id/:section?',
}
