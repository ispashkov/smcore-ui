import { FormInstance } from 'antd'

export interface ClientsAutocompleteProps<FormValues> {
  className?: string
  form: FormInstance<FormValues>
  name: string
  disabled?: boolean
}
