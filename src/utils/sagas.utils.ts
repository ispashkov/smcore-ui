import { call, CallEffect, SagaReturnType } from 'redux-saga/effects'
import { notification } from 'antd'
import axios from 'axios'

import { isDef } from '../types/lang.types'

export function* callApi<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): Generator<CallEffect<SagaReturnType<Fn>>> {
  try {
    return yield call(fn, ...args)
  } catch (error) {
    if (axios.isAxiosError(error) && isDef(error.response)) {
      const { status } = error.response

      if (status === 400) {
        notification.error({
          message: error.response.data.message,
          duration: 10,
          placement: 'bottomRight',
        })
      } else {
        notification.error({
          message: 'Внутренняя ошибка сервера',
          duration: 10,
          placement: 'bottomRight',
        })
      }
    }

    throw error
  }
}
