import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

import { AppPath } from '../../types/path.types'

interface Props extends RouteProps<AppPath> {}

export const PrivateRoute: React.FC<React.PropsWithChildren<Props>> = props => {
  const { keycloak } = useKeycloak()

  const isLoggedIn = keycloak.authenticated

  if (isLoggedIn) {
    return <Route {...props} />
  }

  return null
}
