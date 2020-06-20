import { combineReducers } from 'redux'

import industries from './industries'
import gameCardsReducer from "./gameCards"
import authReducer from './auth'


const rootReducer = combineReducers({
  industries,
  auth: authReducer,
  gameCards:gameCardsReducer
})

export default rootReducer
