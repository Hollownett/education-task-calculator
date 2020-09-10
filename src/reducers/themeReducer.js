const { actionChannel } = require("redux-saga/effects");
const { CHANGE_THEME } = require("@/constants");

function themeReducer(state = { currentTheme: 'light' }, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                currentTheme: action.payload.theme
            }
        default:
            return state
    }
}

export { themeReducer }