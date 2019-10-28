import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { stepsReducer } from './modules/steps'
import { hookFormReducer } from './modules/hook-form'

const reducer = combineReducers({
  form: formReducer,
  steps: stepsReducer,
  hookForm: hookFormReducer,
})
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
  reducer,
)

export default store
