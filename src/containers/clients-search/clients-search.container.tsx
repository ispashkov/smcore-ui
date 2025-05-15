import * as React from 'react'

import { ClientsSearch } from '../../components/clients/clients-search/clients-search.component'
import { useClientsSearch } from './clients-search.hook'

interface Props {
  className?: string
}

export const ClientsSearchContainer: React.FC<Props> = props => {
  const { className } = props

  const { options, loading, onInputChangeHandler, onSelectHandler } = useClientsSearch()

  return (
    <ClientsSearch
      className={className}
      options={options}
      loading={loading}
      onInputChange={onInputChangeHandler}
      onSelect={onSelectHandler}
    />
  )
}
