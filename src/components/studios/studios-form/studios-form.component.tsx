import React from 'react'
import { Form, Steps, FormInstance, Button, Typography } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { useStudiosCreateForm } from './studios-form-hook'
import { StudiosFormFirstStepComponent } from './studios-form-first-step/studios-form-first-step.component'
import { StudiosFormSecondStepComponent } from './studios-form-second-step/studios-form-second-step.component'
import { genStudioInitialValues } from './studios-form-utils'
import { StudiosFormTypes } from './studios-form-types'
import './styles.less'
import { genStudiosPagePath } from '../../../format/path.format'
import { formatPathName } from '../../../format/text.format'
import { AppPath } from '../../../types/path.types'

const { Step } = Steps

interface Props {
  isEdit?: boolean
  form: FormInstance<StudiosFormTypes>
  studiosFormValues?: StudiosFormTypes
  franchisesOptions?: DefaultOptionType[]
  directionsOptions?: DefaultOptionType[]
  onFinishHandler: (values?: StudiosFormTypes) => void
}

export const StudiosFormComponent: React.FC<Props> = ({
  form,
  franchisesOptions,
  onFinishHandler,
  directionsOptions,
  isEdit = false,
}) => {
  const { currentTab, createStudiosSteps, isLastTab, onNextTab, onChangeCurrentTab } = useStudiosCreateForm()

  const renderCurrentStep = () => {
    switch (currentTab) {
      case 0:
        return <StudiosFormFirstStepComponent form={form} franchisesOptions={franchisesOptions} />
      case 1:
        return <StudiosFormSecondStepComponent form={form} directionsOptions={directionsOptions} />
    }
  }

  const btnTitle = isEdit ? 'Завершить редактирование студии' : 'Создать студию'

  return (
    <Form
      layout="vertical"
      autoComplete="off"
      name="studioCreate"
      form={form}
      onFinish={onFinishHandler}
      initialValues={genStudioInitialValues()}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Button type="text" icon={<LeftOutlined />} size="small" className="back-btn">
        <Link to={genStudiosPagePath()}>
          <Typography.Text className="backBtnTitle">{formatPathName(AppPath.STUDIOS)}</Typography.Text>
        </Link>
      </Button>

      <Steps current={currentTab} onChange={onChangeCurrentTab}>
        {createStudiosSteps.map(step => (
          <Step key={step} title={step} />
        ))}
      </Steps>

      <div className="step-wrp">{renderCurrentStep()}</div>

      <Form.Item>
        {isLastTab && (
          <Button type="primary" htmlType="submit">
            {btnTitle}
          </Button>
        )}
        {!isLastTab && (
          <Button type="primary" onClick={onNextTab}>
            Далее
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}
