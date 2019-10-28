export const setForm = payload => ({
  type: 'SET_FORM',
  payload,
})

export const updateFieldValue = payload => ({
  type: 'UPDATE_FIELD_VALUE',
  payload,
})

export const destroyForm = payload => ({
  type: 'DESTROY_FORM',
  payload,
})

export const updateFormValues = payload => ({
  ...console.log('updateFormValues'),
  type: 'UPDATE_FORM_VALUES',
  payload,
})
