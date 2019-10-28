import { createSelector } from 'reselect'
import { isEmpty } from 'ramda'
import { getFormSyncErrors } from 'redux-form'
import { getIsFormValid } from '../hook-form'
import { pageSteps } from './constants'

const getStepsState = state => state.steps

const getInvalidForms = state =>
  pageSteps.reduce((acc, el) => {
    const validForm = getIsFormValid(el.formName)(state)
    const invalidHookForm = validForm !== null && !validForm
    const invalidReduxForm = !isEmpty(getFormSyncErrors(el.formName)(state))
    return invalidHookForm || invalidReduxForm ? [...acc, el.formName] : acc
  }, [])

export const getThereAreInvalidForms = createSelector(
  getInvalidForms,
  invalidForms => !isEmpty(invalidForms),
)

export const getPageSteps = createSelector(
  getInvalidForms,
  getStepsState,
  (invalidForms, stepsState) =>
    pageSteps.map(el => {
      const formIsInvalid = invalidForms.includes(el.formName)
      const isActive = stepsState.active === el.formName
      return { ...el, formIsInvalid, isActive }
    }),
)
