import * as React from 'react'

import { PageEmpty } from '../../../page/page-empty/page-empty.component'
import './autocomplete-empty.styles.less'

export const AutocompleteEmpty: React.FC = () => {
  return (
    <li className="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-dark autocomplete-empty">
      <PageEmpty className="autocomplete-empty__placeholder" description="Ничего не найдено" />
    </li>
  )
}
