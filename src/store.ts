import { createStore, combineReducers } from 'redux'
import { FormReducer, reducer as formReducer } from 'redux-form'
import { tabsReducer, ITabsState } from './modules/tabs'
import { hookFormReducer, IHookFormState } from './modules/hook-form'

// export interface IState {
//   tabs: ITabsState
//   form: FormReducer
//   hookForm: IHookFormState
// }

const reducer = combineReducers({
  hookForm: hookFormReducer,
  form: formReducer,
  tabs: tabsReducer,
})

export const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)
