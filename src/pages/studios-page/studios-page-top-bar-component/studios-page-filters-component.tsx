import React from 'react'
import { Select, Space } from 'antd'

import './styles.less'
import { useStudiosFilters } from './studios-page-filters.hook'

export const StudiosPageFiltersComponent = () => {
  const { citiesOptions, countriesOptions, directionsOptions, organizationsOptions, onSearchHandler } =
    useStudiosFilters()

  return (
    <div className="filters-wrp">
      <Space size={8}>
        <Select
          allowClear
          maxTagCount={1}
          placeholder="Страна"
          options={countriesOptions}
          onChange={onSearchHandler('country')}
        />
        <Select
          allowClear
          maxTagCount={1}
          placeholder="Город"
          options={citiesOptions}
          onChange={onSearchHandler('city')}
        />
        <Select
          allowClear
          maxTagCount={1}
          placeholder="Франшиза"
          options={organizationsOptions}
          onChange={onSearchHandler('orgId')}
        />
        <Select
          allowClear
          maxTagCount={1}
          placeholder="Направление"
          options={directionsOptions}
          onChange={onSearchHandler('directions')}
        />
      </Space>
    </div>
  )
}
