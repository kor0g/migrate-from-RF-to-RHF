import { ACTIONS_TYPES } from './constants'

interface IFormValue {
  [fieldName: string]: any
}
export interface IForm {
  isValid: boolean
  errors: {}
  values: IFormValue
}

export interface IHookFormState {
  [formName: string]: IForm
}
