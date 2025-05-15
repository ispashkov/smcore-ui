import Keycloak, { KeycloakInitOptions } from 'keycloak-js'

import { AUTH_ID } from '../../app/app.config'
import { NString } from '../../types/lang.types'
import { getAccessToken, getRefreshToken } from '../../utils/local-storage.utils'

export class KeycloakProvider {
  private readonly keycloakInstance: Keycloak

  constructor() {
    this.keycloakInstance = new Keycloak({
      url: 'https://keycloak.smstretching.ru',
      realm: 'dev',
      clientId: AUTH_ID,
    })

    this.keycloakInstance.token = getAccessToken()
    this.keycloakInstance.refreshToken = getRefreshToken()
  }

  public getInstance = (): Keycloak => {
    return this.keycloakInstance
  }

  public getToken = (): NString => {
    return this.keycloakInstance.token
  }

  public getInitOptions = (): KeycloakInitOptions => {
    return { token: getAccessToken(), refreshToken: getRefreshToken() }
  }

  public logOut = (): void => {
    this.keycloakInstance.logout()
  }
}
