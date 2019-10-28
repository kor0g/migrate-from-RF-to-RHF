import { omit, path } from 'ramda'

const getStateWithFieldValue = ({ state, formName, fieldName, value }) => ({
  ...state,
  [formName]: {
    ...state[formName],
    values: {
      ...path([formName, 'values'], state),
      [fieldName]: value,
    },
  },
})

const getStateWithFormValue = ({ state, formName, formData }) => ({
  ...state,
  [formName]: { ...state[formName], ...formData },
})

export const hookFormReducer = (state = {}, { type, payload = {} }) =>
  ({
    SET_FORM: { ...state, [payload.formName]: { ...payload.formData } },
    UPDATE_FIELD_VALUE: getStateWithFieldValue({ state, ...payload }),
    DESTROY_FORM: { ...omit([payload])(state) },
    UPDATE_FORM_VALUES: getStateWithFormValue({ state, ...payload }),
  }[type] || state)
