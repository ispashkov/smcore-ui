import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'
import { mapFranchisesToOptions } from '../../../mapping/franchises.mapping'
import { genStudiosFormValues } from '../../../mapping/studios.mapping'

const getDirectionsInternal = (state: AppState) => state.studioEditPage.directions
const getFranchisesInternal = (state: AppState) => state.studioEditPage.franchises
const getStudioInternal = (state: AppState) => state.studioEditPage.studio

export const getDirectionsOptions = createSelector(getDirectionsInternal, directions =>
  mapDirectionsToOptions(directions?.content)
)

export const getFranchisesOptions = createSelector(getFranchisesInternal, franchises =>
  mapFranchisesToOptions(franchises?.content)
)

export const getStudioFormValues = createSelector(getStudioInternal, genStudiosFormValues)
