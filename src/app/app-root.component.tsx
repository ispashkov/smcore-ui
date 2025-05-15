import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useKeycloak } from '@react-keycloak/web'

import { PageLoader } from '../components/page/page-loader/page-loader.component'
import { AuthLayout } from '../components/layouts/auth-layout/auth-layout.component'
import { AppLayoutContainer } from '../containers/app-layout/app-layout.container'
import { layoutActions } from '../store/common/layout/layout.slice'
import { getLayoutIsLoaded, getLayoutIsLoading } from '../store/common/layout/layout.selectors'
import { isDef } from '../types/lang.types'
import { AppRouting } from './app-routing.component'
import './app-root.styles.less'

export const AppRoot: React.FC = () => {
  const { keycloak } = useKeycloak()
  const { authenticated } = keycloak

  const dispatch = useDispatch()

  const layoutIsLoading = useSelector(getLayoutIsLoading)
  const layoutIsLoaded = useSelector(getLayoutIsLoaded)

  const authIsLoaded = isDef(authenticated)
  const authIsLoading = !isDef(authenticated)

  const isLoaded = layoutIsLoaded && authIsLoaded && authenticated
  const isLoading = layoutIsLoading || authIsLoading

  React.useEffect(() => {
    if (authIsLoaded && authenticated) {
      dispatch(layoutActions.fetchAllDictionaries())
    }
  }, [authIsLoaded, authenticated, dispatch])

  React.useEffect(() => {
    return () => {
      dispatch(layoutActions.reset())
    }
  }, [dispatch])

  const onLoginHandler = React.useCallback(() => keycloak.login(), [keycloak])

  if (isLoading) {
    return <PageLoader className="app-layout-loader" />
  }

  if (isLoaded) {
    return (
      <AppLayoutContainer>
        <AppRouting />
      </AppLayoutContainer>
    )
  }

  return <AuthLayout onLogin={onLoginHandler} />
}
