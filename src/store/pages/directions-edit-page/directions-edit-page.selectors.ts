import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../app.store'
import { genDirectionsFormValues } from '../../../mapping/directions.mapping'

const getDirectionInternal = (state: AppState) => state.directionsEditPage.direction

export const getDirectionsFormValues = createSelector(getDirectionInternal, genDirectionsFormValues)
