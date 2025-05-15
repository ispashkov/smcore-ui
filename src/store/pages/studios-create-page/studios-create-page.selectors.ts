import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { mapFranchisesToOptions } from '../../../mapping/franchises.mapping'
import { mapDirectionsToOptions } from '../../../mapping/directions.mapping'

const getFranchisesInternal = (state: AppState) => state.studiosCreatePage.franchises
const getDirectionsInternal = (state: AppState) => state.studiosCreatePage.directions

export const getFranchisesOptions = createSelector(getFranchisesInternal, franchise =>
  mapFranchisesToOptions(franchise?.content)
)

export const getDirectionsOptions = createSelector(getDirectionsInternal, direction =>
  mapDirectionsToOptions(direction?.content)
)
