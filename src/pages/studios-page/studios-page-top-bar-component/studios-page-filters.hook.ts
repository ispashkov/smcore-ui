import * as React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  getCitiesOptions,
  getCountriesOptions,
  getDirectionsOptions,
  getOrganizationsOptions,
} from '../../../store/pages/studios-page/studios-page.selectors'
import { filtersState } from './studios-page-filters-utils'
import { genStudiosPagePath } from '../../../format/path.format'

export function useStudiosFilters() {
  const { push } = useHistory()
  const [filters, setFilters] = useState(filtersState)
  const citiesOptions = useSelector(getCitiesOptions)
  const countriesOptions = useSelector(getCountriesOptions)
  const directionsOptions = useSelector(getDirectionsOptions)
  const organizationsOptions = useSelector(getOrganizationsOptions)

  const onSearchHandler = React.useCallback(
    (name: string) =>
      (value: string): void => {
        setFilters({ ...filters, [name]: value })
      },
    [filters]
  )

  useEffect(() => {
    push(genStudiosPagePath(filters))
  }, [filters, push])

  return {
    citiesOptions,
    countriesOptions,
    directionsOptions,
    organizationsOptions,
    onSearchHandler,
  }
}
