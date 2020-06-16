import { combineReducers } from 'redux'

import industries from './industries'
import {homepage} from "./homepage.reducer"

const rootReducer = combineReducers({
  homepage,
  industries,
})

export default rootReducer
