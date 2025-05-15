import * as React from 'react'
import { Button } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'
import { clsx } from 'clsx'

import { Autocomplete } from '../autocomplete/autocomplete.component'
import { AutocompleteOptionDataItem } from '../autocomplete/autocomplete-option/autocomplete-option.types'
import { SearchAndQrInput } from './search-and-qr-input/search-and-qr-input.component'
import { SearchAndQrProps } from './search-and-qr.types'
import './search-and-qr.styles.less'

export const SearchAndQR = <Option extends AutocompleteOptionDataItem>(props: SearchAndQrProps<Option>) => {
  const { className } = props
  const { value, options } = props
  const {
    loading = false,
    placeholder = 'Поиск по ФИО, номеру телефона, емайл, названию товара, номер карты лояльности',
  } = props
  const { onChange, onInputChange, onSelect } = props
  const { OptionComponent } = props

  return (
    <div className={clsx('search-and-qr', className)}>
      <Autocomplete
        value={value}
        options={options}
        loading={loading}
        placeholder={placeholder}
        onChange={onChange}
        onInputChange={onInputChange}
        onSelect={onSelect}
        InputComponent={SearchAndQrInput}
        OptionComponent={OptionComponent}
      />

      <Button icon={<BarcodeOutlined />} type="primary" size="large">
        Штрих - код
      </Button>
    </div>
  )
}
