import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

import { isDef } from '../../types/lang.types'
import { genTokenHeader } from '../../utils/http.utils'
import { KeycloakProvider } from '../providers/keycloak.provider'

export class HttpConnector {
  private readonly instance: AxiosInstance

  constructor(private readonly keycloakProvider: KeycloakProvider, baseURL: string) {
    this.instance = axios.create({
      baseURL,
      paramsSerializer: {
        serialize: params => qs.stringify(params, { skipNulls: true }),
      },
    })

    this.initializeRequestInterceptor()
  }

  private initializeRequestInterceptor = (): void => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleRequestError)
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    const token = this.keycloakProvider.getToken()
    const tokenHeader = genTokenHeader(token)

    if (isDef(config.headers) && isDef(tokenHeader)) {
      config.headers.Authorization = tokenHeader
    }

    return config
  }

  private handleRequestError = (error: AxiosError): Promise<void> => Promise.reject(error)

  public clearToken = (): void => {
    delete this.instance.defaults.headers.common.Authorization
  }

  public get = <T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.get<T, R>(url, config)
  }

  public post = <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.post<T, R>(url, data, config)
  }

  public put = <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.put<T, R>(url, data, config)
  }

  public patch = <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.patch<T, R>(url, data, config)
  }

  public delete = <T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.delete<T, R>(url, config)
  }
}
