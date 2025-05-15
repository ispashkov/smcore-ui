import * as React from 'react'
import { Typography } from 'antd'

import { ClientsCreatePageBack } from './clients-create-page-back/clients-create-page-back.component'
import { ClientsCreatePageForm } from './clients-create-page-form/clients-create-page-form.component'
import { useClientsCreatePage } from './clients-create-page.hook'
import './clients-create-page.styles.less'

export const ClientsCreatePage = () => {
  useClientsCreatePage()

  return (
    <>
      <ClientsCreatePageBack />

      <Typography.Title level={2}>Добавление клиента</Typography.Title>

      <ClientsCreatePageForm />
    </>
  )
}
