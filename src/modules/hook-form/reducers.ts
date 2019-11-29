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
  console.log('hookFormReducer', { type, payload })
  return (
    {
      [ACTIONS_TYPES.setForm]: { ...state, [payload.formName]: { ...payload.formData } },
      [ACTIONS_TYPES.updateForm]: assocPath([payload.formName], payload.formData, state),
      [ACTIONS_TYPES.destroyForm]: { ...omit([payload])(state) },
      [ACTIONS_TYPES.updateFieldValue]: assocPath(
        [payload.formName, 'values', payload.fieldName],
        payload.value,
        state,
      ),
    }[type] || state
  )
}
