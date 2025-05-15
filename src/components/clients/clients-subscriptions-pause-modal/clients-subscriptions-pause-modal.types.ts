import { AppModalBaseProps } from '../../../types/modal.types'
import {
  ClientsSubscriptionsPauseFormProps,
  ClientsSubscriptionsPauseFormValues,
} from '../clients-subscriptions-pause-form/clients-subscriptions-pause-form.types'

export interface ClientsSubscriptionsPauseModalProps extends AppModalBaseProps, ClientsSubscriptionsPauseFormProps {
  onSubmit: (values: ClientsSubscriptionsPauseFormValues) => void
}
