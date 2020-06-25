import React from 'react'
import { hydrate, render } from 'react-dom'

import { PersistGate } from 'redux-persist/integration/react'
import 'antd/dist/antd.css';

import './index.css'
import App from './Components/App'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'

import CreatorStore from './Redux'


const store  = CreateStore()
const history = createBrowserHistory()
const rootElement = document.getElementById('root')

render(
  <Provider store={store.store}>
    <ConnectedRouter history={history} basename={"/uat007"}>
      <PersistGate persistor={store.persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  rootElement
);


// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker();
