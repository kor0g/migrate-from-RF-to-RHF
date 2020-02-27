import { getFormNames, isInvalid } from 'redux-form'
import { createSelector } from 'reselect'

const getFormState = (state: any) => state.form

export const getInvalidRFormNames = createSelector(
  state => state,
  getFormNames(),
  (state, formNames: Array<string>) => formNames.filter(el => isInvalid(el)(state)),
)
