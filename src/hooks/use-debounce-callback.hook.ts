import * as React from 'react'

export function useDebouncedCallback<A extends any[]>(callback: (...args: A) => void, wait: number) {
  const argsRef = React.useRef<A>()
  const timeout = React.useRef<ReturnType<typeof setTimeout>>()

  const cleanup = () => timeout.current && clearTimeout(timeout.current)

  React.useEffect(() => cleanup, [])

  return React.useCallback(
    (...args: A): void => {
      argsRef.current = args
      cleanup()
      timeout.current = setTimeout(() => {
        if (argsRef.current) {
          callback(...argsRef.current)
        }
      }, wait)
    },
    [callback, wait]
  )
}
