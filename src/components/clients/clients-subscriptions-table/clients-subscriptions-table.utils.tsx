import { ColumnsType } from 'antd/es/table'

import { formatTimeLimitation } from '../../../format/text.format'
import { TableCellText } from '../../table-cells/table-cell-text/table-cell-text.component'
import { ClientsSubscriptionsTableStatus } from './clients-subscriptions-table-status/clients-subscriptions-table-status.component'
import { ClientsSubscriptionsTableStudios } from './clients-subscriptions-table-studios/clients-subscriptions-table-studios.component'
import { ClientsSubscriptionsTableVisits } from './clients-subscriptions-table-visits/clients-subscriptions-table-visits.component'
import { ClientsSubscriptionsTablePurchase } from './clients-subscriptions-table-purchase/clients-subscriptions-table-purchase.component'
import { ClientsSubscriptionsTableActivation } from './clients-subscriptions-table-activation/clients-subscriptions-table-activation.component'
import { ClientsSubscriptionsTableActions } from './clients-subscriptions-table-actions/clients-subscriptions-table-actions.component'
import { ClientsSubscriptionsTableActionsEvents } from './clients-subscriptions-table-actions/clients-subscriptions-table-actions.types'
import { ClientsSubscriptionsTableDataItem } from './clients-subscriptions-table.types'

export function genClientsSubscriptionsTableColumns(
  events: ClientsSubscriptionsTableActionsEvents
): ColumnsType<ClientsSubscriptionsTableDataItem> {
  const { onBarcode, onPause, onResume, onRefund } = events

  return [
    {
      title: 'Занятий доступно',
      key: 'visits',
      fixed: 'left',
      width: 200,
      render: (_, subscription) => {
        const { visitsLeft, visitsTotal, status } = subscription

        return <ClientsSubscriptionsTableVisits left={visitsLeft} total={visitsTotal} status={status} />
      },
    },
    {
      title: 'Дата покупки',
      key: 'purchaseDate',
      render: (_, subscription) => {
        const { purchaseDate } = subscription

        return <ClientsSubscriptionsTablePurchase purchaseDate={purchaseDate} />
      },
    },
    {
      title: 'Дата активации',
      key: 'activation',
      render: (_, subscription) => {
        const { activationDate, autoActivationDate, expirationDate, status } = subscription

        return (
          <ClientsSubscriptionsTableActivation
            activationDate={activationDate}
            autoActivationDate={autoActivationDate}
            expirationDate={expirationDate}
            status={status}
          />
        )
      },
    },
    {
      title: 'Студии',
      key: 'studios',
      render: (_, subscription) => {
        const { studios, hasStudioLimitation } = subscription

        return <ClientsSubscriptionsTableStudios studios={studios} hasStudioLimitation={hasStudioLimitation} />
      },
    },
    {
      title: 'Время посещения',
      key: 'timeLimitation',
      render: (_, subscription) => <TableCellText text={formatTimeLimitation(subscription.timeLimitation)} />,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      fixed: 'right',
      width: 150,
      render: (_, subscription) => <ClientsSubscriptionsTableStatus value={subscription.status} />,
    },
    {
      title: 'Действия',
      key: 'actions',
      fixed: 'right',
      width: 200,
      render: (_, subscription) => {
        const { id, status } = subscription

        return (
          <ClientsSubscriptionsTableActions
            subscriptionId={id}
            status={status}
            onBarcode={onBarcode}
            onPause={onPause}
            onResume={onResume}
            onRefund={onRefund}
          />
        )
      },
    },
  ]
}
