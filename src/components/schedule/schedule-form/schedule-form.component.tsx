import * as React from 'react'
import { Col, DatePicker, Form, FormListFieldData, Row, Select } from 'antd'
import { FormListOperation } from 'antd/lib/form/FormList'
import { clsx } from 'clsx'

import { genDefaultDateFormat } from '../../../format/date.format'
import { getStrEnumValues } from '../../../utils/enum.utils'
import { Days } from '../../../types/days.types'
import { DaysSelectBar } from '../../controls/days-select-bar/days-select-bar.component'
import { DaysDropdown } from '../../controls/days-dropdown/days-dropdown.component'
import { ScheduleFormSlotHeader } from './schedule-form-slot-header/schedule-form-slot-header.component'
import { ScheduleFormSlotItem } from './schedule-form-slot-item/schedule-form-slot-item.component'
import { ScheduleFormSlotAdd } from './schedule-form-slot-add/schedule-form-slot-add.component'
import { useScheduleForm } from './schedule-form.hook'
import { ScheduleFormProps } from './schedule-form.types'

import './schedule-form.styles.less'

export const ScheduleForm: React.FC<ScheduleFormProps> = props => {
  const { form, loading } = props
  const { directionsOptions, exercisesTypesOptions, studiosRoomsOptions, trainersOptions } = props
  const { onFieldsChange } = props

  const {
    currentDay,
    setCurrentDay,
    initialValues,
    directionValidationRules,
    typeValidationRules,
    dateValidationRules,
    timeRangePlaceholder,
    onCopyHandler,
    onFieldsChangeHandler,
  } = useScheduleForm({ form, onFieldsChange })

  return (
    <Form
      form={form}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      disabled={loading}
      initialValues={initialValues}
      onFieldsChange={onFieldsChangeHandler}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item label="Название" name="direction" rules={directionValidationRules}>
        <Select placeholder="Название" options={directionsOptions} loading={loading} />
      </Form.Item>

      <Form.Item label="Тип" name="type" rules={typeValidationRules}>
        <Select placeholder="Тип" options={exercisesTypesOptions} loading={loading} />
      </Form.Item>

      <Form.Item label="День недели">
        <Row gutter={16} justify="space-between">
          <Col span={12}>
            <DaysSelectBar value={currentDay} onChange={setCurrentDay} />
          </Col>
          <Col span={12}>
            <DaysDropdown label="Скопировать расписание из" onClick={onCopyHandler} />
          </Col>
        </Row>
      </Form.Item>

      {getStrEnumValues<Days>(Days).map(day => (
        <div key={day} className={clsx({ 'schedule-form-slot_hidden': day !== currentDay })}>
          <Form.List name={['slots', day]}>
            {(fields: FormListFieldData[], { add, remove }: FormListOperation, { errors }) => (
              <>
                <ScheduleFormSlotHeader />

                {fields.map((field: FormListFieldData) => {
                  const { key, name } = field

                  return (
                    <ScheduleFormSlotItem
                      key={key}
                      day={day}
                      form={form}
                      name={name}
                      loading={loading}
                      trainersOptions={trainersOptions}
                      studiosRoomsOptions={studiosRoomsOptions}
                      onRemove={remove}
                    />
                  )
                })}

                <ScheduleFormSlotAdd onAdd={add} />

                <Form.ErrorList errors={errors} />
              </>
            )}
          </Form.List>
        </div>
      ))}

      <Form.Item label="Время начала и окончания" name="date" rules={dateValidationRules}>
        <DatePicker.RangePicker placeholder={timeRangePlaceholder} format={genDefaultDateFormat()} />
      </Form.Item>
    </Form>
  )
}
