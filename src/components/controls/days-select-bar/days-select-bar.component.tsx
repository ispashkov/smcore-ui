import * as React from 'react'
import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio/interface'
import { clsx } from 'clsx'

import { formatDays } from '../../../format/text.format'
import { validateStrEnumValue } from '../../../utils/enum.utils'
import { genDays } from '../../../utils/days.utils'
import { Days } from '../../../types/days.types'
import { isDef } from '../../../types/lang.types'
import './days-select-bar.styles.less'

interface Props {
  className?: string
  value: Days
  onChange: (value: Days) => void
}

export const DaysSelectBar: React.FC<Props> = props => {
  const { className } = props
  const { value, onChange } = props

  const days = React.useMemo(genDays, [])

  const onChangeHandler = React.useCallback(
    (e: RadioChangeEvent): void => {
      const day = validateStrEnumValue<Days>(Days, e.target.value)

      if (isDef(day)) {
        onChange(day)
      }
    },
    [onChange]
  )

  return (
    <Radio.Group className={clsx('days-select-bar', className)} value={value} onChange={onChangeHandler}>
      {days.map(day => (
        <Radio.Button className="days-select-bar__button" key={day} value={day}>
          {formatDays(day)}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
