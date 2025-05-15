import { FormInstance } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'

import { PaymentType } from '../../../api/types/api.types'

export interface ExercisesGroupBookingFormProps {
  form: FormInstance<ExercisesGroupBookingFormValues>
  loading: boolean
  placesOptions?: DefaultOptionType[]
  paymentTypesOptions?: DefaultOptionType[]
}

export interface ExercisesGroupBookingFormValues {
  phone: string
  place: number
  paymentType: PaymentType
}
