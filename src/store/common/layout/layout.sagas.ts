import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { api } from '../../../api/api'
import { prefetchThemeStyles, setTheme } from '../../../utils/theme.utils'
import { layoutActions } from './layout.slice'
import { getTheme, getThemeIsInitialized } from './layout.selectors'
import { callApi } from '../../../utils/sagas.utils'

export function* fetchAllDictionaries(_action: ReturnType<typeof layoutActions.fetchAllDictionaries>) {
  try {
    const response: Awaited<ReturnType<typeof api.studiosService.fetchAll>> = yield callApi(api.studiosService.fetchAll)

    yield put(layoutActions.fetchAllDictionariesSuccess(response.data))
  } catch (e) {
    yield put(layoutActions.fetchAllDictionariesError(new Error()))
  }
}

export function* initializeTheme(_action: ReturnType<typeof layoutActions.initializeTheme>) {
  const theme: ReturnType<typeof getTheme> = yield select(getTheme)
  const themeIsInitialized: ReturnType<typeof getThemeIsInitialized> = yield select(getThemeIsInitialized)

  if (!themeIsInitialized) {
    yield all([call(prefetchThemeStyles), call(setTheme, theme)])
    yield put(layoutActions.initializeThemeSuccess())
  }
}

export function* changeTheme(action: ReturnType<typeof layoutActions.changeTheme>) {
  yield call(setTheme, action.payload)
}

export function* layoutSagas() {
  yield takeLatest(layoutActions.fetchAllDictionaries, fetchAllDictionaries)
  yield takeLatest(layoutActions.initializeTheme, initializeTheme)
  yield takeLatest(layoutActions.changeTheme, changeTheme)
}
