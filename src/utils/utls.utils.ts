import { generatePath, matchPath } from 'react-router-dom'

import { AppPath, InternalPath, RoutePathParams } from '../types/path.types'

export function buildPath(path: AppPath | InternalPath, params?: RoutePathParams) {
  return generatePath(path, params)
}

type isActiveRouteParams = {
  pathname: string
  linkUrl: string
  search?: string
  isExact?: boolean
}

export const isActiveRoute = ({ pathname, linkUrl, search, isExact }: isActiveRouteParams): boolean =>
  !!matchPath(pathname, { path: buildPath(linkUrl), exact: isExact }) ||
  !!matchPath(`${pathname}${search}`, {
    path: buildPath(linkUrl),
    exact: isExact,
  })
