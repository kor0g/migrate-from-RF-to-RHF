const initial = {
  active: '',
}

export const stepsReducer = (state = initial, { type, payload }) =>
  ({
    SET_ACTIVE: { ...state, active: payload },
  }[type] || state)
