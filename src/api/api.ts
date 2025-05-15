import Keycloak, { KeycloakInitOptions } from 'keycloak-js'
import { AuthClientTokens } from '@react-keycloak/core/lib/types'

import { API_URL } from '../app/app.config'
import { removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '../utils/local-storage.utils'
import { NString } from '../types/lang.types'
import { KeycloakProvider } from './providers/keycloak.provider'
import { HttpConnector } from './connectors/http.connector'
import { StudiosService } from './services/studios.service'
import { StudiosRoomsService } from './services/studios-rooms.service'
import { TrainersService } from './services/trainers.service'
import { TrainersCategoriesService } from './services/trainers-categories.service'
import { ProductsGoodsService } from './services/products-goods.service'
import { ProductsSubscriptionsService } from './services/products-subscriptions.service'
import { ProductsServicesService } from './services/products-services.service'
import { OrganizationsService } from './services/organizations.service'
import { ExercisesService } from './services/exercises.service'
import { ExercisesTypesService } from './services/exercises-types.service'
import { ExercisesDirectionsService } from './services/exercises-directions.service'
import { EmployeesService } from './services/employees.service'
import { EmployeesPositionsService } from './services/employees-positions.service'
import { ClientsService } from './services/clients.service'
import { ClientsCategoriesService } from './services/clients-categories.service'
import { ClientsSubscriptionsService } from './services/clients-subscriptions.service'
import { ClientsTransactionsService } from './services/clients-transactions.service'
import { SearchService } from './services/search.service'
import { ExercisesTimetableService } from './services/exercises-timetable.service'
import { TransactionsService } from './services/transactions.service'
import { ProductsService } from './services/products.service'
import { ClientsBookingsService } from './services/clients-bookings.service'

export class Api {
  // providers
  private readonly keycloakProvider: KeycloakProvider

  // connectors
  private readonly httpConnectorInternal: HttpConnector

  // services
  public readonly studiosService: StudiosService
  public readonly studiosRoomsService: StudiosRoomsService

  public readonly trainersService: TrainersService
  public readonly trainersCategoriesService: TrainersCategoriesService

  public readonly productService: ProductsService
  public readonly productsGoodsService: ProductsGoodsService
  public readonly productsSubscriptionsService: ProductsSubscriptionsService
  public readonly productsServicesService: ProductsServicesService

  public readonly organizationsService: OrganizationsService

  public readonly exercisesService: ExercisesService
  public readonly exercisesTypesService: ExercisesTypesService
  public readonly exercisesDirectionsService: ExercisesDirectionsService
  public readonly exercisesTimetableService: ExercisesTimetableService

  public readonly employeesService: EmployeesService
  public readonly employeesPositionsService: EmployeesPositionsService

  public readonly clientsService: ClientsService
  public readonly clientsCategoryService: ClientsCategoriesService
  public readonly clientsSubscriptionsService: ClientsSubscriptionsService
  public readonly clientsTransactionsService: ClientsTransactionsService
  public readonly clientsBookingsService: ClientsBookingsService

  public readonly transactionsService: TransactionsService

  public readonly searchService: SearchService

  constructor() {
    // provider
    this.keycloakProvider = new KeycloakProvider()

    // connectors
    this.httpConnectorInternal = new HttpConnector(this.keycloakProvider, API_URL)

    // services
    this.studiosService = new StudiosService(this.httpConnectorInternal)
    this.studiosRoomsService = new StudiosRoomsService(this.httpConnectorInternal)

    this.trainersService = new TrainersService(this.httpConnectorInternal)
    this.trainersCategoriesService = new TrainersCategoriesService(this.httpConnectorInternal)

    this.productService = new ProductsService(this.httpConnectorInternal)
    this.productsGoodsService = new ProductsGoodsService(this.httpConnectorInternal)
    this.productsSubscriptionsService = new ProductsSubscriptionsService(this.httpConnectorInternal)
    this.productsServicesService = new ProductsServicesService(this.httpConnectorInternal)

    this.organizationsService = new OrganizationsService(this.httpConnectorInternal)

    this.exercisesService = new ExercisesService(this.httpConnectorInternal)
    this.exercisesTypesService = new ExercisesTypesService(this.httpConnectorInternal)
    this.exercisesDirectionsService = new ExercisesDirectionsService(this.httpConnectorInternal)
    this.exercisesTimetableService = new ExercisesTimetableService(this.httpConnectorInternal)

    this.employeesService = new EmployeesService(this.httpConnectorInternal)
    this.employeesPositionsService = new EmployeesPositionsService(this.httpConnectorInternal)

    this.clientsService = new ClientsService(this.httpConnectorInternal)
    this.clientsCategoryService = new ClientsCategoriesService(this.httpConnectorInternal)
    this.clientsSubscriptionsService = new ClientsSubscriptionsService(this.httpConnectorInternal)
    this.clientsTransactionsService = new ClientsTransactionsService(this.httpConnectorInternal)
    this.clientsBookingsService = new ClientsBookingsService(this.httpConnectorInternal)

    this.transactionsService = new TransactionsService(this.httpConnectorInternal)

    this.searchService = new SearchService(this.httpConnectorInternal)
  }

  public getAccessToken = (): NString => {
    return this.keycloakProvider.getToken()
  }

  public getKeycloakInstance = (): Keycloak => {
    return this.keycloakProvider.getInstance()
  }

  public getKeycloakInitOptions = (): KeycloakInitOptions => {
    return this.keycloakProvider.getInitOptions()
  }

  public setTokens = (tokens: AuthClientTokens): void => {
    const { token, refreshToken } = tokens

    setAccessToken(token)
    setRefreshToken(refreshToken)
  }

  public logOut = (): void => {
    removeAccessToken()
    removeRefreshToken()
    this.httpConnectorInternal.clearToken()
    this.keycloakProvider.logOut()
  }
}

export const api = new Api()
