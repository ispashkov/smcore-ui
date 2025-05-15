import moment from 'moment'

import { ClientsApi } from '../api/types/clients-api.types'
import { ClientsTableRow } from '../components/clients/clients-table/clients-table.types'
import { ClientsFormValues, ClientsFormValuesDTO } from '../components/clients/clients-form/clients-form.types'
import { ClientsInfo } from '../components/clients/clients-info/clients-info.types'
import { genDefaultMomentDateFormat } from '../format/date.format'
import { formatFullName } from '../format/text.format'
import { isDef, isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { ClientSex } from '../types/clients.types'
import { validateStrEnumValue } from '../utils/enum.utils'
import { ClientsAutocompleteOptionDataItem } from '../components/clients/clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.types'
import { ExercisesGroupWaitingClient } from '../components/exercises-group/exercises-group-waiting-client/exercises-group-waiting-client.types'
import { ExercisesApi } from '../api/types/exercises-api.types'

export function mapClientsToClientsTableRowList(clients: Nullable<ClientsApi.Client[]>): Nullable<ClientsTableRow[]> {
  if (isDefAndNotEmpty(clients)) {
    return clients.map(
      (client: ClientsApi.Client): ClientsTableRow => ({
        id: client.id,
        photo: client.photo,
        name: formatFullName(client.firstName, client.lastName),
        phone: client.phone,
        loyaltyCard: client.loyaltyCard,
        lastVisit: client.lastVisit,
        clientCategory: client.clientCategory,
      })
    )
  }

  return null
}

export function genClientDTO(data: ClientsFormValuesDTO): Nullable<ClientsApi.ClientDTO> {
  const sex = mapClientSexToApi(data.sex)

  if (isDef(data.clientCategoryId) && isDef(sex))
    return {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName,
      sex,
      photo: data.photo,
      phone: data.phone,
      birthDate: data.birthDate,
      loyaltyCard: data.loyaltyCard,
      deposit: data.deposit,
      source: data.source,
      comment: data.comment,
      clientCategoryId: data.clientCategoryId,
    }

  return null
}

export function genClientsFormValues(client: Nullable<ClientsApi.Client>): Nullable<ClientsFormValues> {
  if (isDef(client)) {
    const sex = mapClientSexToClient(client.sex)

    if (isDef(sex)) {
      return {
        email: client.email,
        firstName: client.firstName,
        lastName: client.lastName,
        middleName: client.middleName,
        sex,
        photo: client.photo,
        phone: client.phone,
        birthDate: isDef(client.birthDate) ? moment(client.birthDate, genDefaultMomentDateFormat()) : undefined,
        loyaltyCard: client.loyaltyCard,
        deposit: client.deposit,
        source: client.source,
        comment: client.comment,
        clientCategoryId: client.clientCategory?.id,
      }
    }
  }

  return null
}

export function mapClientSexToClient(value: Nullable<ClientsApi.ClientSex>): Nullable<ClientSex> {
  return validateStrEnumValue<ClientSex>(ClientSex, value)
}

export function mapClientSexToApi(value: Nullable<ClientSex>): Nullable<ClientsApi.ClientSex> {
  return validateStrEnumValue<ClientsApi.ClientSex>(ClientsApi.ClientSex, value)
}

export function mapClientToClientsInfo(client: Nullable<ClientsApi.Client>): Nullable<ClientsInfo> {
  if (isDef(client)) {
    return {
      name: formatFullName(client.firstName, client.lastName),
      phone: client.phone,
      photo: client.photo,
    }
  }

  return null
}

export function mapClientsToClientsAutocompleteOptionDataItems(
  clients: Nullable<ClientsApi.Client[]>
): Nullable<ClientsAutocompleteOptionDataItem[]> {
  if (isDefAndNotEmpty(clients)) {
    return clients?.map((client: ClientsApi.Client): ClientsAutocompleteOptionDataItem => {
      const { id, firstName, lastName, phone } = client
      const label = isDef(firstName) && isDef(lastName) ? formatFullName(firstName, lastName) : 'Имя не задано'

      return {
        slug: id,
        label,
        phone,
      }
    })
  }

  return null
}

export function mapExerciseWaitingListToExercisesGroupWaitingClientItems(
  waitingList: Nullable<ExercisesApi.ExerciseWaitListItem[]>
): Nullable<ExercisesGroupWaitingClient[]> {
  if (isDefAndNotEmpty(waitingList)) {
    return waitingList.reduce<ExercisesGroupWaitingClient[]>((acc, it) => {
      const { client } = it

      if (isDef(client)) {
        const { firstName, lastName, middleName, phone } = client

        const name =
          isDef(firstName) && isDef(lastName) ? formatFullName(firstName, lastName, middleName) : 'Имя не указано'

        if (isDef(phone)) {
          const exercisesGroupWaitingClient: ExercisesGroupWaitingClient = {
            id: it.id,
            clientId: client.id,
            name,
            phone,
            photo: client.photo,
          }

          acc.push(exercisesGroupWaitingClient)
        }
      }

      return acc
    }, [])
  }

  return null
}
