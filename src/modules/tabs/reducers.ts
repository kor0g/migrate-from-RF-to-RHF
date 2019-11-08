import { TAction } from './actions'

interface ITabsState {
  active: string
}

type TTabsReducer = (state: ITabsState, action: TAction) => ITabsState

const initial: ITabsState = {
  active: '',
}

export const tabsReducer: TTabsReducer = (state = initial, { type, payload }) =>
  ({
    SET_ACTIVE: { ...state, active: payload },
  }[type] || state)
