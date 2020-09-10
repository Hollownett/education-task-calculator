import { combineReducers } from 'redux'

import { themeReducer } from './themeReducer'
import { keypadReducer } from './keypadReducer'

export const rootReducer = combineReducers({
  calculator: keypadReducer,
  theme: themeReducer
})
