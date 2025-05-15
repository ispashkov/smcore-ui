import * as React from 'react'
import { clsx } from 'clsx'

import { isDef } from '../../../types/lang.types'
import { InputTime } from '../input-time/input-time.component'
import { InputTimeRangeProps } from './input-time-range.types'
import './input-time-range.styles.less'

export const InputTimeRange: React.FC<InputTimeRangeProps> = props => {
  const { className } = props
  const { value, placeholder } = props
  const { onChange } = props

  const from = isDef(value) ? value[0] : undefined
  const to = isDef(value) ? value[1] : undefined

  const [placeholderFrom, placeholderTo] = placeholder

  const onChangeFromHandler = React.useCallback(
    (value: string): void => {
      if (isDef(onChange)) {
        onChange([value, to])
      }
    },
    [onChange, to]
  )

  const onChangeToHandler = React.useCallback(
    (value: string): void => {
      if (isDef(onChange)) {
        onChange([from, value])
      }
    },
    [onChange, from]
  )

  return (
    <div className={clsx('input-time-range', className)}>
      <InputTime value={from || ''} placeholder={placeholderFrom} onChange={onChangeFromHandler} />
      <InputTime value={to || ''} placeholder={placeholderTo} onChange={onChangeToHandler} />
    </div>
  )
}
