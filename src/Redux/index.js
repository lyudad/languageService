import { createStore, applyMiddleware, compose } from 'redux'

 import { persistStore, persistReducer } from 'redux-persist'
 import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'
import apiMiddlware from './middlewares/api'
import socketMiddlware from './middlewares/socket'

import appReducer from './reducers'

export default () => {
  
  
  const middlewares = [apiMiddlware, thunk, socketMiddlware]
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)

  return { store, persistor }

}
