import { AppState } from '../../../app.store'

export const getClientsEditPageSubscriptionsPauseModalIsLoading = (state: AppState) =>
  state.clientsEditPage.clientsEditPageSubscriptionsPauseModal.isLoading
