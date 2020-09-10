/* eslint-disable no-case-declarations */
const {
  CALCULATE,
  SET_EXPRESSION,
  ADD_TO_HISTORY,
  CLEAR,
  CLEAR_ELEMENT,
  CLEAR_HISTORY,
} = require('@/constants')

function setExpression(expression, action) {
  if (
    /[\d]*[-+*/.]$/.exec(expression) &&
    /[-+*/.]/.exec(action.payload.expr)
  ) {
    console.log('b', expression)
    expression = expression.slice(0, expression.length - 1)
    console.log('a', expression)
  }

  switch (action.type) {
    case SET_EXPRESSION:
      if (
        ['+', '/', '*'].includes(action.payload.expr) &&
        !expression
      ) {
        return `${action.payload.expr}`
      }
      return `${expression + action.payload.expr}`
    default:
      return expression
  }
}

function keypadReducer(
  state = { expr: '', history: [] },
  action,
) {
  switch (action.type) {
    case CALCULATE:
      return {
        ...state,
        expr: action.payload.expr,
      }
    case SET_EXPRESSION:
      const expression = setExpression(state.expr, action)
      return {
        ...state,
        expr: expression,
      }
    case ADD_TO_HISTORY:
      state.history.push(action.payload.expr)
      return {
        ...state,
      }
    case CLEAR:
      return {
        ...state,
        expr: action.payload.expr,
      }
    case CLEAR_ELEMENT:
      return {
        ...state,
        expr: state.expr.slice(0, state.expr.length - 1),
      }
    case CLEAR_HISTORY:
      return {
        ...state,
        history: state.history.splice(),
      }
    default:
      return state
  }
}

export { keypadReducer }
