import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Result } from 'antd'

import { genHomePagePath } from '../../format/path.format'

export const NotFoundPage: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Упс, страница не найдена :("
      extra={
        <Link to={genHomePagePath()}>
          <Button type="primary">Вернуться на главную</Button>
        </Link>
      }
    />
  )
}
