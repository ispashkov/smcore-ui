import * as React from 'react'

import { TransactionsCreatePageHeader } from './transactions-create-page-header/transactions-create-page-header.component'
import { TransactionsCreatePageAdd } from './transactions-create-page-add/transactions-create-page-add.component'
import { TransactionsCreatePageTable } from './transactions-create-page-table/transactions-create-page-table.component'
import { TransactionsCreatePageAbout } from './transactions-create-page-about/transactions-create-page-about.component'
import { TransactionsCreatePageForm } from './transactions-create-page-form/transactions-create-page-form.component'
import { TransactionsCreatePageTotal } from './transactions-create-page-total/transactions-create-page-total.component'
import { TransactionsCreatePageSubmit } from './transactions-create-page-submit/transactions-create-page-submit.component'
import { useTransactionsCreatePage } from './transactions-create-page.hook'

export const TransactionsCreatePage: React.FC = () => {
  const { form } = useTransactionsCreatePage()

  return (
    <>
      <TransactionsCreatePageHeader />
      <TransactionsCreatePageAdd />
      <TransactionsCreatePageTable />
      <TransactionsCreatePageAbout />
      <TransactionsCreatePageForm form={form} />
      <TransactionsCreatePageTotal />
      <TransactionsCreatePageSubmit form={form} />
    </>
  )
}
