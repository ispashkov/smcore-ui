import * as React from 'react'
import SimpleTimeField from 'react-simple-timefield'
import { Input } from 'antd'

import { isDef } from '../../../types/lang.types'
import { InputTimeProps } from './input-time.types'

export const InputTime: React.FC<InputTimeProps> = props => {
  const { className } = props
  const { value, onChange } = props

  const onChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string): void => {
      if (isDef(onChange)) {
        onChange(value)
      }
    },
    [onChange]
  )

  return <SimpleTimeField value={value} input={<Input className={className} />} colon=":" onChange={onChangeHandler} />
}
