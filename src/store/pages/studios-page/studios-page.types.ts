import { Nullable } from '../../../types/lang.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'

export interface StudiosFiltersDataSuccessPayload {
  cities: Nullable<string[]>
  countries: Nullable<string[]>
  directions: Nullable<ExercisesDirectionsApi.ExerciseDirection[]>
  organizations: Nullable<OrganizationsApi.Organization[]>
}
