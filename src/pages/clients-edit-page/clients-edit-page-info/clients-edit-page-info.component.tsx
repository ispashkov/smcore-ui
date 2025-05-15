import * as React from 'react'

import { isDef } from '../../../types/lang.types'
import { ClientsInfo } from '../../../components/clients/clients-info/clients-info.component'
import { useClientsEditPageInfo } from './clients-edit-page-info.hook'
import './clients-edit-page-info.styles.less'

export const ClientsEditPageInfo: React.FC = () => {
  const { clientInfo } = useClientsEditPageInfo()

  if (isDef(clientInfo)) {
    const { name, phone, photo } = clientInfo

    return <ClientsInfo className="clients-edit-page-info" name={name} phone={phone} photo={photo} />
  }

  return null
}
