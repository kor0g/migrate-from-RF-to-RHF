import { TAction } from './actions'

interface ITabsState {
  active: string
}

type TTabsReducer = (state: ITabsState, action: TAction) => ITabsState

const initial: ITabsState = {
  active: '',
}

// @ts-ignore
export const tabsReducer: TTabsReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE':
      return { ...state, active: payload }
    default:
      return state
  }
}
