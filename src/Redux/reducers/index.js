import { combineReducers } from 'redux'

import industries from './industries'
import signUpReducer from './signUp'
import loginReducer from './login'

const rootReducer = combineReducers({
  industries,
  signUp: signUpReducer,
  login: loginReducer
})

export default rootReducer
