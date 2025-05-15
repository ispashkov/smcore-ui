import { InputTimeValue } from '../input-time/input-time.types'

export interface InputTimeRangeProps {
  className?: string
  value?: InputTimeRangeValue
  placeholder: [string, string]
  onChange?: (value: InputTimeRangeValue) => void
}

export type InputTimeRangeValue = [InputTimeValue | undefined, InputTimeValue | undefined]
