import { createStore, combineReducers } from 'redux'
import { FormReducer, reducer as formReducer } from 'redux-form'
import { tabsReducer, ITabsState } from './modules/tabs'
import { hookFormReducer, IHookFormState } from './modules/hook-form'
import { createReducerManager } from './createReducerManager'

// export interface IState {
//   tabs: ITabsState
//   form: FormReducer
//   hookForm: IHookFormState
// }

export const staticReducers = {
  form: formReducer,
  tabs: tabsReducer,
}

const reducer = combineReducers({
  ...staticReducers,
  // hookForm: hookFormReducer,
})

export const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)
