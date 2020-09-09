// @todo: add some actions
import {
  CALCULATE,
  SET_EXPRESSION,
  ADD_TO_HISTORY,
} from '@/constants/actions'

const calculate = expr => async (dispatch, getState) => {
  try {
    const answer = eval(expr)
    if (answer) {
      dispatch({
        type: ADD_TO_HISTORY,
        payload: { expr: expr },
      })
    }
    dispatch({
      type: CALCULATE,
      payload: {
        expr: answer,
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

export { calculate, setExpression }
