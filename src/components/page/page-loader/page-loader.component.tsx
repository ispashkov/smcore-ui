import * as React from 'react'
import { Spin } from 'antd'
import { clsx } from 'clsx'

import './page-loader.styles.less'

interface Props {
  className?: string
}

export const PageLoader: React.FC<Props> = props => {
  const { className } = props

  return (
    <div className={clsx('pageLoader', className)}>
      <Spin />
    </div>
  )
}
