import React from 'react'
import { hydrate, render } from 'react-dom'
// import './index.css'
import App from './Components/App'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// import { PersistGate } from 'redux-persist/integration/react'
import createBrowserHistory from 'history/createBrowserHistory'

import CreatorStore from './Redux'

const { store } = CreatorStore()
const history = createBrowserHistory()
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename={'/uat007'}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
)


// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker();
