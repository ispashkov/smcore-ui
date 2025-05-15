import * as React from 'react'
import { Input } from 'antd'

import { useControlled } from '../../../hooks/use-controlled.hook'
import { useDebouncedCallback } from '../../../hooks/use-debounce-callback.hook'

interface Props {
  className?: string
  value?: string
  placeholder: string
  onChange?: (value: string) => void
}

export const Search: React.FC<Props> = props => {
  const { className } = props
  const { value: valueProp, placeholder } = props
  const { onChange } = props

  const [value, setValueIfUncontrolled] = useControlled({
    controlled: valueProp,
    default: '',
  })

  const onChangeDebounced = useDebouncedCallback((value: string): void => {
    if (onChange) {
      onChange(value)
    }
  }, 300)

  const onChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target

      setValueIfUncontrolled(value)
      onChangeDebounced(value)
    },
    [onChangeDebounced, setValueIfUncontrolled]
  )

  return <Input className={className} value={value} placeholder={placeholder} size="large" onChange={onChangeHandler} />
}
