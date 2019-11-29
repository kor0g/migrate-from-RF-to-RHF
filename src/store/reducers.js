import { FormReducer, reducer as formReducer } from 'redux-form'
import { tabsReducer, ITabsState } from '../modules/tabs'
import { hookFormReducer, IHookFormState } from '../modules/hook-form'

export const staticReducers = {
  form: formReducer,
  tabs: tabsReducer,
}

export const restReducers = {
  hookForm: hookFormReducer,
}
