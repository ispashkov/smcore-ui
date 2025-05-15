import * as React from 'react'

import { SearchAndQR } from '../../controls/search-and-qr/search-and-qr.component'
import { ClientsAutocompleteOption } from '../clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.component'
import { ClientsSearchProps } from './clients-search.types'

export const ClientsSearch: React.FC<ClientsSearchProps> = props => {
  return <SearchAndQR {...props} OptionComponent={ClientsAutocompleteOption} />
}
