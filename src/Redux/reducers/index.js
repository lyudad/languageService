import {combineReducers} from 'redux'
import industries from './industries'
import homepage from "./homepage"
import gameCardsReducer from "./gameCards"
import authReducer from './auth'

const rootReducer = combineReducers({
  homepage,
  industries,
  auth: authReducer,
  gameCards:gameCardsReducer
})

export default rootReducer
