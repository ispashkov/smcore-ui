import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { ProductsServicesApi } from '../../../api/types/products-services-api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesTypesApi } from '../../../api/types/exercises-types-api.types'
import { ServiceFormValues } from '../../../components/products/products-services-form/product-services-form.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'

export interface ProductServicesEditPageDataSuccessPayload {
  service: Nullable<ProductsServicesApi.ProductService>
  studios: Nullable<Pagination<StudiosApi.Studio>>
  exercises: Nullable<Pagination<ExercisesTypesApi.ExerciseType>>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
}

export interface ProductServicesEditPageUpdateFranchisePayload {
  id: string
  data: ServiceFormValues
}
