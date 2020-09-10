// @todo: add some actions
import {
  CALCULATE,
  SET_EXPRESSION,
  ADD_TO_HISTORY,
  CLEAR,
  CLEAR_ELEMENT,
  CLEAR_HISTORY,
} from '@/constants/actions'

const calculate = expr => async (dispatch, getState) => {
  try {
    const answer = eval(expr)
    if (expr.search(/[-+*/.]/) !== -1) {
      dispatch({
        type: ADD_TO_HISTORY,
        payload: { expr: expr },
      })
    }
    dispatch({
      type: CALCULATE,
      payload: {
        expr: answer.toString(),
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const setExpression = key => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_EXPRESSION,
      payload: {
        expr: key,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const clearExpression = () => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: CLEAR,
      payload: {
        expr: '',
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const clearElement = () => (dispatch, getState) => {
  try {
    dispatch({
      type: CLEAR_ELEMENT,
    })
  } catch (error) {
    console.log(error)
  }
}

const clearHistory = () => (dispatch, getState) => {
  try {
    dispatch({
      type: CLEAR_HISTORY,
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  calculate,
  setExpression,
  clearExpression,
  clearElement,
  clearHistory,
}
