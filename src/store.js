import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, thunk)),
)

sagaMiddleware.run(rootSaga)
