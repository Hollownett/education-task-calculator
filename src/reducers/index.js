import { combineReducers } from 'redux'

import { keypadReducer } from './keypadReducer'

export const rootReducer = combineReducers({
  calculator: keypadReducer,
})
