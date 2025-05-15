import * as React from 'react'
import { Empty } from 'antd'
import { clsx } from 'clsx'

import './page-empty.styles.less'

interface Props {
  className?: string
  description: string
}

export const PageEmpty: React.FC<Props> = props => {
  const { className } = props
  const { description } = props

  return (
    <Empty className={clsx('page-empty', className)} image={Empty.PRESENTED_IMAGE_SIMPLE} description={description} />
  )
}
