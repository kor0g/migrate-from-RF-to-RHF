import { ACTIONS_TYPES } from './constants'

// type TActionType = keyof typeof ACTIONS_TYPES

interface ISetFormPayload {
  formName: string
  formData: {
    isValid: boolean
    errors: {}
    values: {}
  }
}

export const setForm = (payload: ISetFormPayload) => ({
  type: ACTIONS_TYPES.setForm,
  payload,
})

interface IUpdateFormPayload {
  formName: string
  formData: {
    isValid: boolean
    errors: {}
  }
}

export const updateForm = (payload: IUpdateFormPayload) => ({
  type: ACTIONS_TYPES.updateForm,
  payload,
})

export const destroyForm = (payload: string) => ({
  type: ACTIONS_TYPES.destroyForm,
  payload,
})

interface IUpdateFieldValuePayload {
  formName: string
  fieldName: string
  value: string
}

export const updateFieldValue = (payload: IUpdateFieldValuePayload) => ({
  type: ACTIONS_TYPES.updateFieldValue,
  payload,
})

export type TAction = ReturnType<typeof setForm> &
  ReturnType<typeof updateForm> &
  ReturnType<typeof destroyForm> &
  ReturnType<typeof updateFieldValue>

// export type TAction =
//   | { type: typeof ACTIONS_TYPES.setForm; payload: ISetFormPayload }
//   | { type: typeof ACTIONS_TYPES.destroyForm; payload: string }
//   | { type: typeof ACTIONS_TYPES.updateForm; payload: IUpdateFormPayload }
//   | { type: typeof ACTIONS_TYPES.updateFieldValue; payload: IUpdateFieldValuePayload }

// export type TAction = { type: typeof ACTIONS_TYPES.setForm; payload: ISetFormPayload } & {
//   type: typeof ACTIONS_TYPES.destroyForm
//   payload: string
// } & { type: typeof ACTIONS_TYPES.updateForm; payload: IUpdateFormPayload } & {
//   type: typeof ACTIONS_TYPES.updateFieldValue
//   payload: IUpdateFieldValuePayload
// }
