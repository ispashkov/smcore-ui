import { ColumnsType } from 'antd/lib/table'

import { formatPluralized } from '../../../format/text.format'
import { ProductsSubscriptionsTableColumnActions } from './products-subscriptions-table-column-actions/products-subscriptions-table-column-actions.component'
import { ProductsSubscriptionsTableActions, ProductsSubscriptionsTableRow } from './products-subscriptions-table.types'

export function genProductsSubscriptionsTableColumns(
  params: ProductsSubscriptionsTableActions
): ColumnsType<ProductsSubscriptionsTableRow> {
  const { onEdit, onRemove } = params

  return [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: name => name || '',
    },
    {
      title: 'Количество занятий',
      dataIndex: 'visits',
      key: 'visits',
      render: text => `${text} шт.` || '-',
    },
    {
      title: 'Срок действия',
      dataIndex: 'validityDays',
      key: 'validityDays',
      render: days => formatPluralized(days, ['день', 'дня', 'дней']) || '-',
    },
    {
      title: 'Заморозка',
      dataIndex: 'freezingDays',
      key: 'freezingDays',
      render: days => formatPluralized(days, ['день', 'дня', 'дней']) || '-',
    },
    {
      title: 'Авто-активация',
      dataIndex: 'activationDays',
      key: 'activationDays',
      render: days => formatPluralized(days, ['день', 'дня', 'дней']) || '-',
    },
    {
      title: 'Студия',
      dataIndex: 'availableStudios',
      key: 'availableStudios',
      render: studios => {
        if (studios === 0) return 'Все студии'
        else if (studios > 0) return formatPluralized(studios, ['студия', 'студии', 'студий'])
        else return '-'
      },
    },
    {
      title: 'Время',
      dataIndex: 'timeLimitation',
      key: 'timeLimitation',
      render: text => (text === 'NONE' ? 'Любое время' : `До 16:45` || '-'),
    },
    {
      title: 'Стоимость',
      dataIndex: 'cost',
      key: 'cost',
      render: text => `${text} ₽` || '-',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (_, { id, name, type }) => (
        <ProductsSubscriptionsTableColumnActions id={id} name={name} type={type} onEdit={onEdit} onRemove={onRemove} />
      ),
    },
  ]
}
