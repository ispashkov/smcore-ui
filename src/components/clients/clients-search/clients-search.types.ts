import { SearchAndQrProps } from '../../controls/search-and-qr/search-and-qr.types'
import { ClientsAutocompleteOptionDataItem } from '../clients-autocomplete/clients-autocomplete-option/clients-autocomplete-option.types'

export type ClientsSearchProps = Omit<SearchAndQrProps<ClientsAutocompleteOptionDataItem>, 'OptionComponent'>
