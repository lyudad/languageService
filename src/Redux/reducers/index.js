import { combineReducers } from 'redux'

import industries from './industries'
<<<<<<< HEAD
import gameCardsReducer from "./gameCards"
import authReducer from './auth'

=======
import authReducer from './auth'
>>>>>>> develop

const rootReducer = combineReducers({
  industries,
  auth: authReducer,
<<<<<<< HEAD
  gameCards:gameCardsReducer
=======
>>>>>>> develop
})

export default rootReducer
