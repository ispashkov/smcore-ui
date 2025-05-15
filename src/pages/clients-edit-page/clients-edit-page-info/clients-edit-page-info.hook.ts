import { useSelector } from 'react-redux'

import { genClientsEditPageCommonClientsInfo } from '../../../store/pages/clients-edit-page/clients-edit-page-common/clients-edit-page-common.selectors'

export function useClientsEditPageInfo() {
  const clientInfo = useSelector(genClientsEditPageCommonClientsInfo)

  return {
    clientInfo,
  }
}
