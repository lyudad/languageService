import { combineReducers } from 'redux'

import industries from './industries'
import gameCardsReducer from "./gameCards"

const rootReducer = combineReducers({
  industries,
  gameCards:gameCardsReducer
})

export default rootReducer
