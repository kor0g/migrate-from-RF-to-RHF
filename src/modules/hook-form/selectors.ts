import { createSelector } from 'reselect'
// import { path } from 'ramda'
import { IHookFormState, IForm } from './types'
// import { IState } from '../../store'

type IState = any

const getHookFormState = (state: IState): IHookFormState => state.hookForm

const getFormData = (name: string) =>
  createSelector(getHookFormState, forms => (forms || {})[name] || null)

const getFormNames = createSelector(getHookFormState, (hookForm: IHookFormState) =>
  Object.keys(hookForm),
)

export const getFormValues = (name: string) =>
  createSelector(getFormData(name), formData => (formData && formData.values) || null)

export const getFormErrors = (name: string) =>
  createSelector(getFormData(name), formData => (formData && formData.errors) || null)

export const getIsFormValid = (name: string) =>
  createSelector(getFormData(name), formData => formData && formData.isValid)

export const getInvalidHFormNames = createSelector(
  state => state,
  getFormNames,
  (state, formNames: Array<string>) => formNames.filter(el => !getIsFormValid(el)(state)),
)

// export const getAreFormValid = (formNames?: Array<string>) =>
//   createSelector(
//     (state: IState): IState => state,
//     getAllFormNames,
//     (state: IState, allFormNames: Array<string>) =>
//       (formNames || allFormNames).every(name => getIsFormValid(name)(state)),
//   )
