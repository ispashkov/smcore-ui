import { configureStore } from '@reduxjs/toolkit'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/src/getDefaultMiddleware'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'

import { history } from '../utils/history.utils'
import { createAppReducer } from './app.reducer'
import { appSagas } from './app.sagas'

const logger = createLogger({
  collapsed: true,
})

const sagaMiddleware = createSagaMiddleware()

export type AppState = ReturnType<ReturnType<typeof createAppReducer>>

export const store = configureStore({
  reducer: createAppReducer(history),
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(logger, sagaMiddleware, routerMiddleware(history))
  },
})

sagaMiddleware.run(appSagas)
