import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { ProductsSubscriptionsApi } from '../../../api/types/products-subscriptions-api.types'
import { ProductsSubscriptionsFormValue } from '../../../components/products/products-subscriptions-form/products-subscriptions-form.types'

export interface ProductSubscriptionEditPageDataSuccessPayload {
  subscription: Nullable<ProductsSubscriptionsApi.ProductSubscription>
  studios: Nullable<Pagination<StudiosApi.Studio>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
}

export interface ProductSubscriptionEditPageUpdatePayload {
  id: string
  data: ProductsSubscriptionsFormValue
}
