import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import store from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
  }
`
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
