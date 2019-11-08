import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { tabsReducer, ITabsState } from './modules/tabs'
import { hookFormReducer } from './modules/hook-form'

export interface IState {
  tabs: ITabsState
}

const reducer = combineReducers<any>({
  form: formReducer,
  tabs: tabsReducer,
  hookForm: hookFormReducer,
})

export const store = ((<any>window).devToolsExtension
  ? (<any>window).devToolsExtension()(createStore)
  : createStore)(reducer)
