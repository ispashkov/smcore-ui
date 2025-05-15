import { ColumnsType } from 'antd/lib/table'

import { formatPluralized } from '../../../format/text.format'
import { ProductsServicesTableColumnActions } from './products-services-table-column-actions/products-services-table-column-actions.component'
import { ProductsServicesTableActions, ProductsServicesTableRow } from './products-services-table.types'

export function genProductsServicesTableColumns(
  params: ProductsServicesTableActions
): ColumnsType<ProductsServicesTableRow> {
  const { onEdit, onRemove } = params

  return [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: name => name || '',
    },
    {
      title: 'Студия',
      dataIndex: 'availableStudios',
      key: 'availableStudios',
      render: studios => formatPluralized(studios, ['студия', 'студии', 'студий']) || '-',
    },
    {
      title: 'Цена',
      dataIndex: 'cost',
      key: 'cost',
      render: text => `${text} ₽` || '-',
    },
    {
      title: 'Цена пробного',
      dataIndex: 'trialCost',
      key: 'trialCost',
      render: text => `${text} ₽` || '-',
    },
    {
      title: 'Действие',
      key: 'action',
      align: 'center',
      render: (_, { id, name }) => (
        <ProductsServicesTableColumnActions id={id} name={name} onEdit={onEdit} onRemove={onRemove} />
      ),
    },
  ]
}
