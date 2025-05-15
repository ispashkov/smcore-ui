import React from 'react'
import {
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
  Select,
  TimePicker,
  AutoComplete,
  FormInstance,
  Checkbox,
} from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { AddressSuggestions } from 'react-dadata'
import { WomanOutlined } from '@ant-design/icons'

import { genDefaultTimeFormat } from '../../../../format/date.format'
import { StudiosFormTypes } from '../studios-form-types'
import { ImageUploadGallery } from '../../../image-upload-gallery/image-upload-gallery'
import { useStudiosFormFirstStep } from './studios-form-first-step.hook'

interface Props {
  form: FormInstance<StudiosFormTypes>
  franchisesOptions?: DefaultOptionType[]
}

/**
 * @todo AddressSuggestions should be replaced to own implementation
 */
export const StudiosFormFirstStepComponent: React.FC<Props> = ({ form, franchisesOptions }) => {
  const { citiesRef, countryRef, addressRef, photos, onChangePhotos } = useStudiosFormFirstStep(form)

  return (
    <div>
      <Typography.Title level={2}>Основная информация</Typography.Title>
      <Row justify="start" gutter={18}>
        <Col span={12}>
          <Form.Item label="Название" name="name" rules={[{ required: true, message: 'Введите название студии' }]}>
            <Input placeholder="Название студии" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Страна" name="country" rules={[{ required: true, message: 'Выберите страну' }]}>
            <AddressSuggestions
              autoload
              filterFromBound="country"
              filterToBound="country"
              filterLocations={[{ country_iso_code: '*' }]}
              token="8e5638d41e111108c577c07c198b1c8b6dbfdbd0"
              ref={countryRef}
              customInput={props => {
                const customChange = (value: string) => {
                  props.onChange({ target: value })
                  countryRef.current?.setInputValue(value)
                  form.setFieldValue('country', value)
                }
                const options = countryRef.current?.state.suggestions.map(s => ({
                  label: s.value,
                  value: s.value,
                }))
                return (
                  <AutoComplete
                    options={options}
                    value={form.getFieldValue('country')}
                    placeholder="Выберите страну"
                    onChange={customChange}
                  />
                )
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={18}>
        <Col span={12}>
          <Form.Item label="Город" name="city" rules={[{ required: true, message: 'Выберите город' }]}>
            <AddressSuggestions
              autoload
              filterFromBound="city"
              filterToBound="city"
              token="8e5638d41e111108c577c07c198b1c8b6dbfdbd0"
              ref={citiesRef}
              customInput={props => {
                const customChange = (value: string) => {
                  props.onChange({ target: value })
                  citiesRef.current?.setInputValue(value)
                  form.setFieldValue('city', value)
                }
                const options = citiesRef.current?.state.suggestions.map(s => ({
                  label: s.value,
                  value: s.value,
                }))
                return (
                  <AutoComplete
                    options={options}
                    value={form.getFieldValue('city')}
                    placeholder="Введите город"
                    onChange={customChange}
                  />
                )
              }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Адрес" name="address" rules={[{ required: true, message: 'Введите адрес' }]}>
            <AddressSuggestions
              autoload
              token="8e5638d41e111108c577c07c198b1c8b6dbfdbd0"
              ref={addressRef}
              customInput={props => {
                const customChange = (value: string) => {
                  props.onChange({ target: value })
                  addressRef.current?.setInputValue(value)
                  form.setFieldValue('address', value)
                }
                const options = addressRef.current?.state.suggestions.map(s => ({
                  label: s.value,
                  value: s.value,
                }))
                return (
                  <AutoComplete
                    options={options}
                    value={form.getFieldValue('address')}
                    placeholder="Введите адресс"
                    onChange={customChange}
                  />
                )
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={18}>
        <Col span={12}>
          <Form.Item label="Часы работы" name="workTime" rules={[{ required: true, message: 'Выберите часы работы' }]}>
            <TimePicker.RangePicker
              autoFocus
              placeholder={['__:__', '__:__']}
              format={genDefaultTimeFormat()}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Франшиза" name="orgId" rules={[{ required: true, message: 'Выберите франшизу' }]}>
            <Select placeholder="Выбрать" options={franchisesOptions} labelInValue />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start" gutter={18}>
        <Col span={12}>
          <Form.Item label="Описание" name="description">
            <Input.TextArea rows={4} placeholder="Описание" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Минимальная ставка"
            extra="Стоимость 1 занятия в ₽"
            name="minRate"
            rules={[{ required: true, message: 'Введите мин.ставку' }]}
          >
            <InputNumber
              min={1}
              defaultValue={1}
              type="number"
              placeholder="0"
              controls={false}
              style={{ width: '50%' }}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Ограничения" name="girlsOnly" valuePropName="checked">
            <Checkbox>
              Только для девочек <WomanOutlined />
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Typography.Title level={2}>Галерея</Typography.Title>

      <Row justify="start">
        <Col span={12}>
          <Form.Item name="photos">
            <ImageUploadGallery fileList={photos} onChange={onChangePhotos} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
