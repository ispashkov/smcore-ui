import { Nullable } from '../../../types/lang.types'
import { Pagination } from '../../../api/types/api.types'
import { StudiosApi } from '../../../api/types/studios-api.types'
import { ExercisesDirectionsApi } from '../../../api/types/exercises-directions-api.types'
import { OrganizationsApi } from '../../../api/types/organizations-api.types'
import { StudiosFormTypes } from '../../../components/studios/studios-form/studios-form-types'

export interface StudioPageDataSuccessPayload {
  studio: Nullable<StudiosApi.Studio>
  directions: Nullable<Pagination<ExercisesDirectionsApi.ExerciseDirection>>
  franchises: Nullable<Pagination<OrganizationsApi.Organization>>
}

export interface StudiosEditPageUpdatePayload {
  id: string
  data: StudiosFormTypes
}
