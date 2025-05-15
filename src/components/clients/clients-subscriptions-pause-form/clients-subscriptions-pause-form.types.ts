import { FormInstance } from 'antd'

export interface ClientsSubscriptionsPauseFormProps {
  form: FormInstance<ClientsSubscriptionsPauseFormValues>
  isLoading?: boolean
}

export interface ClientsSubscriptionsPauseFormValues {
  freezingDays: number
}
