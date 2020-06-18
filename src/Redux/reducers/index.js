import { combineReducers } from 'redux'

import industries from './industries'
import {homepage} from "./homepage.reducers"

const appReducer = combineReducers({
  homepage,
  // industries,
})

export default appReducer
