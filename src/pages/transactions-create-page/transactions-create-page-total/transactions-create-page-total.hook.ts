import { useSelector } from 'react-redux'

import { getTransactionsCreatePageTotal } from '../../../store/pages/transactions-create-page/transactions-create-page-table/transactions-create-page-table.selectors'
import { formatPenniesToRubles, formatRubleCurrency } from '../../../format/number.format'

export function useTransactionsCreatePageTotal() {
  const price = useSelector(getTransactionsCreatePageTotal)

  const rubles = formatPenniesToRubles(price)
  const total = ` ${formatRubleCurrency(rubles)}`

  return {
    total,
  }
}
