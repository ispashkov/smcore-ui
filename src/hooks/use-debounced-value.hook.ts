import * as React from 'react'

export function useDebouncedValue<V>(initialValue: V, wait: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(initialValue)
    }, wait)

    return () => {
      clearTimeout(handler)
    }
  }, [initialValue, wait])

  return debouncedValue
}
