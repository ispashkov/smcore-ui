import * as React from 'react'
import { useState } from 'react'

import { genCreateStudiosSteps } from './studios-form-utils'

export function useStudiosCreateForm() {
  const [currentTab, setCurrentTab] = useState(0)
  const createStudiosSteps = React.useMemo(genCreateStudiosSteps, [])
  const isLastTab = currentTab === 1

  const onChangeCurrentTab = (value: number) => {
    setCurrentTab(value)
  }

  const onNextTab = () => {
    onChangeCurrentTab(1)
  }

  return {
    currentTab,
    createStudiosSteps,
    isLastTab,
    onChangeCurrentTab,
    onNextTab,
  }
}
