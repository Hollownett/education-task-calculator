// @todo: add some helpers
import { SET_EXPRESSION } from '@/constants'

export function setExpression(expression, action) {
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
