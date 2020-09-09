import { combineReducers } from 'redux'

import example from './example'
import { keypadReducer } from './keypadReducer'

export const rootReducer = combineReducers({
  example,
  calculator: keypadReducer,
})
