import { DefaultOptionType } from 'antd/lib/select'

import { formatClientSex } from '../../../format/text.format'
import { ClientSex } from '../../../types/clients.types'
import { isDef } from '../../../types/lang.types'
import { formatMomentToDate } from '../../../format/date.format'
import { ClientsFormValues, ClientsFormValuesDTO } from './clients-form.types'

export function genClientSexOptions(): DefaultOptionType[] {
  return [
    {
      label: formatClientSex(ClientSex.U),
      value: ClientSex.U,
    },
    {
      label: formatClientSex(ClientSex.M),
      value: ClientSex.M,
    },
    {
      label: formatClientSex(ClientSex.F),
      value: ClientSex.F,
    },
  ]
}

export function genClientsFormValuesDTO(values: ClientsFormValues): ClientsFormValuesDTO {
  const { birthDate, ...restValues } = values

  return {
    ...restValues,
    birthDate: isDef(birthDate) ? formatMomentToDate(birthDate) : null,
  }
}
