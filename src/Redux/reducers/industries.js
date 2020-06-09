import { createReducer } from 'Helpers/redux'

import { SET_HEADER_CAT } from 'Redux/actions/main'

const initialState = {
  industriesD: [],
  data: '',
  age: 0
}

const handlers = {
  [SET_HEADER_CAT]: (state, { payload }) => {
    return {
      ...state,
      industriesD: payload
    }
  },
  // [LOAD_INDUSTRIES_TAG.REQUEST]: state => {
  //   return {
  //     ...state
  //   }
  // },
  // [LOAD_INDUSTRIES_TAG.FAILURE]: (state, { payload: { data } }) => {
  //   return {
  //     ...state
  //   }
  // },
  // [LOAD_INDUSTRIES_TAG.SUCCESS]: (state, { payload: { data } }) => {
  //   return {
  //     ...state,
  //     industriesMetaTags: data
  //   }
  // }
}

export default createReducer(initialState, handlers)
