import { createStore, combineReducers } from 'redux'
import { FormReducer, reducer as formReducer } from 'redux-form'
import { omit } from 'ramda'
import { tabsReducer, ITabsState } from '../modules/tabs'
import { hookFormReducer, IHookFormState } from '../modules/hook-form'

const staticReducers = {
  form: formReducer,
  tabs: tabsReducer,
}

const asyncReducers = {
  hookForm: hookFormReducer,
}

const includedReducers = {}

const rootReducer = (state, action) => {
  const { payload, type } = action

  const deleteReducer = () => {
    delete includedReducers[payload]
  }

  const addReducer = () => {
    includedReducers[payload] = asyncReducers[payload]
  }

  const actionWithIncludedReducers = {
    DELETE_REDUCER: deleteReducer,
    ADD_REDUCER: addReducer,
  }[type]

  actionWithIncludedReducers && actionWithIncludedReducers()

  return combineReducers({
    ...staticReducers,
    ...includedReducers,
  })(state, action)
}

// export interface IState {
//   tabs: ITabsState
//   form: FormReducer
//   hookForm: IHookFormState
// }

export const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(rootReducer)
