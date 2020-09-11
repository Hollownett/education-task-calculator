const { CHANGE_THEME } = require('@/constants')

const INITIAL_STATE = {
  currentTheme: 'light',
}

function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload.theme,
      }
    default:
      return state
  }
}

export { themeReducer }
