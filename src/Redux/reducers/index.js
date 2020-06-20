import { combineReducers } from 'redux'

import industries from './industries'
import authReducer from './auth'

const rootReducer = combineReducers({
  industries,
  auth: authReducer,
})

export default rootReducer
