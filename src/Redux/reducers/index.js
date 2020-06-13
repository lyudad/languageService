import { combineReducers } from 'redux'

import industries from './industries'
import signUpReducer from './signUp'

const rootReducer = combineReducers({
  industries,
  signUp: signUpReducer
})

export default rootReducer
