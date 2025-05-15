import { RouterState } from 'connected-react-router'

import { AppState } from '../../app.store'

export const getRouterState = (state: AppState): RouterState => state.router
