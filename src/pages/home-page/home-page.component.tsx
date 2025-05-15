import * as React from 'react'
import { Redirect } from 'react-router-dom'

import { isDef } from '../../types/lang.types'
import { AppPath } from '../../types/path.types'
import { genSchedulePagePath } from '../../format/path.format'
import { useStudio } from '../../hooks/use-studios.hook'

export const HomePage: React.FC = () => {
  const { studioId } = useStudio()

  if (isDef(studioId)) {
    return <Redirect to={genSchedulePagePath(studioId)} />
  }

  return <Redirect to={AppPath.NOT_FOUND} />
}
