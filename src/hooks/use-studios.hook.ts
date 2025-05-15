import * as React from 'react'
import { useSelector } from 'react-redux'

import {
  getCurrentStudioId,
  getCurrentStudioName,
  getCurrentStudioOffset,
} from '../store/common/layout/layout.selectors'
import { setSelectedStudioId } from '../utils/local-storage.utils'

export function useStudio() {
  const studioId = useSelector(getCurrentStudioId)
  const studioName = useSelector(getCurrentStudioName)
  const studioOffset = useSelector(getCurrentStudioOffset)

  React.useEffect(() => {
    setSelectedStudioId(studioId)
  }, [studioId])

  return {
    studioId,
    studioOffset,
    studioName,
  }
}
