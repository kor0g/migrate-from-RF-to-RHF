import { createSelector } from 'reselect'

const getHookFormState = state => state.hookForm

const getFormData = name =>
  createSelector(
    getHookFormState,
    forms => forms[name] || null,
  )

export const getFormValues = name =>
  createSelector(
    getFormData(name),
    formData => (formData && formData.values) || null,
  )

export const getFormErrors = name =>
  createSelector(
    getFormData(name),
    formData => (formData && formData.errors) || null,
  )

export const getIsFormValid = name =>
  createSelector(
    getFormData(name),
    formData => formData && formData.isValid,
  )

export const getAreFormValid = (names = []) =>
  createSelector(
    state => state,
    state => names.every(name => getIsFormValid(name)(state)),
  )
