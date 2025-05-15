import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { ConfigProvider } from 'antd'
import ruRu from 'antd/lib/locale/ru_RU'

import { api } from '../api/api'
import { store } from '../store/app.store'
import { history } from '../utils/history.utils'
import { AppRoot } from './app-root.component'
import './app-root.styles.less'

const keycloakClient = api.getKeycloakInstance()

export const App: React.FC = () => {
  return (
    <ReactKeycloakProvider authClient={keycloakClient} onTokens={api.setTokens}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ConfigProvider locale={ruRu}>
            <AppRoot />
          </ConfigProvider>
        </ConnectedRouter>
      </Provider>
    </ReactKeycloakProvider>
  )
}
