import { createSelector } from 'reselect'
import { path } from 'ramda'
import { IHookFormState, IForm } from './types'
// import { IState } from '../../store'

interface IState {
  [key: string]: {}
}

const getHookFormState = (state: IState): IHookFormState | void => state.hookForm

const getFormData = (name: string) =>
  createSelector(
    getHookFormState,
    forms => (forms || {})[name] || null,
  )

export const getFormValues = (name: string) =>
  createSelector(
    getFormData(name),
    formData => (formData && formData.values) || null,
  )

export const getFormErrors = (name: string) =>
  createSelector(
    getFormData(name),
    formData => (formData && formData.errors) || null,
  )

export const getIsFormValid = (name: string) =>
  createSelector(
    getFormData(name),
    formData => formData && formData.isValid,
  )

const getAllFormNames = createSelector(
  getHookFormState,
  forms => Object.keys(forms || {}),
)

export const getAreFormValid = (formNames?: Array<string>) =>
  createSelector(
    (state: IState): IState => state,
    getAllFormNames,
    (state: IState, allFormNames: Array<string>) =>
      (formNames || allFormNames).every(name => getIsFormValid(name)(state)),
  )
