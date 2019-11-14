import { omit, path, assocPath } from 'ramda'
import { ACTIONS_TYPES } from './constants'
import { TAction } from './actions'
import { Reducer } from 'redux'

interface IState {
  [key: string]: {
    isValid: boolean
    errors: {}
    values: {}
  }
}

// type THookFormReducer = (state: IState, action: TAction) => IState

export const hookFormReducer: Reducer<any> = (state = {}, { type, payload = {} }) => {
  switch (type) {
    case ACTIONS_TYPES.setForm:
      return { ...state, [payload.formName]: { ...payload.formData } }
    case ACTIONS_TYPES.updateForm:
      return assocPath([payload.formName], payload.formData, state)
    case ACTIONS_TYPES.destroyForm:
      return { ...omit([payload])(state) }
    case ACTIONS_TYPES.updateFieldValue:
      return assocPath([payload.formName, 'values', payload.fieldName], payload.value, state)
    default:
      return state
  }
}
