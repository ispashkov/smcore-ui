import * as React from 'react'
import { Spin } from 'antd'
import './autocomplete-loader.styles.less'

export const AutocompleteLoader: React.FC = () => {
  return (
    <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child autocomplete-loader">
      <Spin className="autocomplete-loader__spinner" />
    </li>
  )
}
